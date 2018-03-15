import Datas from "../database/datas";

import {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLSchema,
  GraphQLID
} from "graphql";

import {
  globalIdField,
  nodeDefinitions,
  fromGlobalId,
  connectionDefinitions,
  connectionArgs,
  connectionFromArray,
  cursorForObjectInConnection,
  offsetToCursor,
  mutationWithClientMutationId
} from "graphql-relay";

import {
  userLoader,
  dataLoader,
  User,
  Data,
  addData,
  removeData,
  renameData
} from "../database";

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    switch (type) {
      case "User":
        return userLoader.load(id);
      case "Data":
        return dataLoader.load(id);
      default:
        return null;
    }
  },
  obj => {
    if (obj instanceof User) {
      return GraphQLUser;
    }

    if (obj instanceof Data) {
      return GraphQLData;
    }

    return null;
  }
);

const GraphQLUser = new GraphQLObjectType({
  name: "User",
  description: "用户对象类型",
  fields: () => ({
    id: globalIdField("User"),
    name: { type: new GraphQLNonNull(GraphQLString) },
    mail: { type: new GraphQLNonNull(GraphQLString) }
  }),
  interfaces: [nodeInterface]
});

const GraphQLDataType = new GraphQLEnumType({
  name: "DataType",
  description: "数据对象类型",
  values: {
    DT_UNKOWN: { value: "DT_UNKOWN" },
    STRUCTURED: { value: "STRUCTURED" },
    NOT_STRUCTURED: { value: "NOT_STRUCTURED" }
  }
});

const GraphQLDataMode = new GraphQLEnumType({
  name: "DataMode",
  description: "数据同步模式",
  values: {
    UNDETERMINED: { value: "UNDETERMINED" },
    CSV_FILE: { value: "CSV_FILE" },
    MYSQL_DB: { value: "MYSQL_DB" },
    MONGO_DB: { value: "MONGO_DB" },
    OBJECT_STORAGE: { value: "OBJECT_STORAGE" }
  }
});

const GraphQLDataStatus = new GraphQLEnumType({
  name: "DataStatus",
  description: "数据对象状态",
  values: {
    PENDING: { value: "PENDING" },
    WAIT_TO_UPLOAD: { value: "WAIT_TO_UPLOAD" },
    UPLOADING: { value: "UPLOADING" },
    UPLOADED: { value: "UPLOADED" },
    FAIL_TO_UPLOAD: { value: "FAIL_TO_UPLOAD" },
    DESTROYED: { value: "DESTROYED" },
    MODIFYING: { value: "MODIFYING" }
  }
});

const GraphQLData = new GraphQLObjectType({
  name: "Data",
  description: "数据管理的数据",
  fields: () => ({
    id: globalIdField("Data"),
    dataId: { type: new GraphQLNonNull(GraphQLString) },
    dataName: { type: new GraphQLNonNull(GraphQLString) },
    dataType: { type: new GraphQLNonNull(GraphQLDataType) },
    dataMode: { type: GraphQLDataMode },
    dataSize: { type: GraphQLInt },
    createTime: { type: new GraphQLNonNull(GraphQLInt) },
    updateTime: { type: new GraphQLNonNull(GraphQLInt) },
    status: { type: new GraphQLNonNull(GraphQLDataStatus) }
  }),
  interfaces: [nodeInterface]
});

const {
  connectionType: DataConnection,
  edgeType: GraphQLDataEdge
} = connectionDefinitions({
  name: "Data",
  nodeType: GraphQLData
});

const GraphQLDataList = new GraphQLObjectType({
  name: "DataList",
  description: "数据管理的数据列表",
  fields: () => ({
    datas: {
      type: DataConnection,
      args: {
        offset: { type: GraphQLInt, defaultValue: 0 },
        ...connectionArgs
      },
      resolve: (source, { offset, ...args }) =>
        connectionFromArray(source, {
          ...{ after: offsetToCursor(offset - 1) },
          ...args
        })
    },
    totalCount: {
      type: GraphQLInt,
      resolve: source => source.length
    }
  })
});

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Query入口",
  fields: () => ({
    userInfo: {
      type: GraphQLUser,
      resolve: () => userLoader.load("admin")
    },
    dataList: {
      type: GraphQLDataList,
      resolve: async () => {
        const { datas: dataIds } = await userLoader.load("admin");
        return dataLoader.loadMany(dataIds);
      }
    },
    node: nodeField
  })
});

const GraphQLAddDataMutation = mutationWithClientMutationId({
  name: "AddData",
  inputFields: {
    dataName: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    dataEdge: {
      type: GraphQLDataEdge,
      resolve: async ({ localDataId }) => {
        const data = await dataLoader.load(localDataId);
        const { datas: dataIds } = await userLoader.load("admin");
        const datas = await dataLoader.loadMany(dataIds);
        return {
          cursor: cursorForObjectInConnection(datas, data),
          node: data
        };
      }
    },
    dataList: {
      type: GraphQLDataList,
      resolve: async () => {
        const { datas: dataIds } = await userLoader.load("admin");
        return dataLoader.loadMany(dataIds);
      }
    }
  },
  mutateAndGetPayload: ({ dataName }) => {
    const localDataId = addData({
      dataName,
      status: "DESTROYED",
      updateTime: "0000000000",
      dataMode: "CSV_FILE",
      dataType: "STRUCTURED",
      dataSize: "0",
      createTime: "0000000000"
    });
    return { localDataId };
  }
});

const GraphQLRemoveDataMutation = mutationWithClientMutationId({
  name: "RemoveData",
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  outputFields: {
    deletedDataId: {
      type: GraphQLID,
      resolve: ({ id }) => id
    },
    dataList: {
      type: GraphQLDataList,
      resolve: async () => {
        const { datas: dataIds } = await userLoader.load("admin");
        return dataLoader.loadMany(dataIds);
      }
    }
  },
  mutateAndGetPayload: ({ id }) => {
    const localDataId = fromGlobalId(id).id;
    removeData(localDataId);
    return { id };
  }
});

const GraphQLRenameDataMutation = mutationWithClientMutationId({
  name: "RenameData",
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    dataName: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    changedDataId: {
      type: GraphQLID,
      resolve: ({ id }) => id
    },
    dataList: {
      type: GraphQLDataList,
      resolve: async () => {
        const { datas: dataIds } = await userLoader.load("admin");
        return dataLoader.loadMany(dataIds);
      }
    }
  },
  mutateAndGetPayload: ({ id, dataName }) => {
    const localDataId = fromGlobalId(id).id;
    renameData(localDataId, dataName);
    return { localDataId };
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Mutation入口",
  fields: {
    addData: GraphQLAddDataMutation,
    removeData: GraphQLRemoveDataMutation,
    renameData: GraphQLRenameDataMutation
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
