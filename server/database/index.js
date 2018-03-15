import DataLoader from "dataloader";
import datas from "./datas";

class Data {
  constructor(
    id,
    dataId,
    dataName,
    dataType,
    dataMode,
    dataSize,
    createTime,
    updateTime,
    status
  ) {
    this.id = id;
    this.dataId = dataId;
    this.dataName = dataName;
    this.dataType = dataType;
    this.dataMode = dataMode;
    this.dataSize = dataSize;
    this.createTime = createTime;
    this.updateTime = updateTime;
    this.status = status;
  }
}
const dataLoader = new DataLoader(ids => Promise.all(ids.map(fetchData)));
const datasById = {};
const dataIds = [];
let nextDataId = 0;
function addData(fields) {
  const {
    dataId,
    dataName,
    dataType,
    dataMode,
    dataSize,
    createTime,
    updateTime,
    status
  } = fields;
  const id = nextDataId++;
  const data = new Data(
    id,
    dataId || id,
    dataName,
    dataType,
    dataMode,
    dataSize,
    createTime,
    updateTime,
    status
  );
  datasById[id] = data;
  dataIds.push(id);
  dataLoader.clear(id);
  return id;
}
addDatas(datas);
function getDatas() {
  return dataIds.map(id => datasById[id]);
}
function getData(id) {
  return datasById[id];
}
function addDatas(fieldsArr) {
  return fieldsArr.forEach(item => addData(item));
}
function fetchData(id) {
  return new Promise(resolve => {
    resolve(getData(id));
  });
}
function removeData(id) {
  const dataIndex = dataIds.indexOf(parseInt(id));
  if (dataIndex !== -1) {
    dataIds.splice(dataIndex, 1);
  }
  delete datasById[id];
  dataLoader.clear(id);
}
function renameData(id, dataName) {
  const data = datasById[id];
  data.dataName = dataName;
  dataLoader.clear(id);
}

class User {
  constructor(id, name, mail, datas) {
    this.id = id;
    this.name = name;
    this.mail = mail;
    this.datas = dataIds;
  }
}
const users = [new User("admin", "admin", "admin@email.com", dataIds)];
function getUser(id) {
  return users.find(v => v.id === id);
}
function fetchUser(id) {
  return new Promise(resolve => {
    resolve(getUser(id));
  });
}
const userLoader = new DataLoader(ids => Promise.all(ids.map(fetchUser)));

export {
  userLoader,
  dataLoader,
  User,
  Data,
  getDatas,
  addData,
  removeData,
  renameData
};
