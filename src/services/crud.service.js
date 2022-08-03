import axios from "axios";


const getRecordById = async (projectTag, tableName, columns, id, token) => {
  try {
    const url = `https://api.dotenx.com/database/query/select/project/${projectTag}/table/${tableName}`;
    const response = await axios.post(url, {
      columns, filters: {
        filterSet: [
          {
            key: "id",
            operator: "=",
            value: id
          }
        ],
        "conjunction": "and"
      }
    }, prepareHeaders(token));

    return response.data?.[0];
  } catch (error) {
    throw new Error(`Failed to get records: ${error.message}`);
  }
}

const getRecords = async (projectTag, tableName, columns, filters, token) => {
  try {
    const url = `https://api.dotenx.com/database/query/select/project/${projectTag}/table/${tableName}`;
    const response = await axios.post(url, { columns, filters }, prepareHeaders(token));
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get records: ${error.message}`);
  }
}

const addRecord = async (projectTag, tableName, record, token) => {
  try {
    const url = `https://api.dotenx.com/database/query/insert/project/${projectTag}/table/${tableName}`;
    const response = await axios.post(url, record, prepareHeaders(token));
    return response.data;
  } catch (error) {
    throw new Error(`Failed to add record: ${error.message}`);
  }
}

const updateRecord = async (projectTag, tableName, id, updated, token) => {
  try {
    const url = `https://api.dotenx.com/database/update/insert/project/${projectTag}/table/${tableName}/row/${id}`;
    const response = await axios.post(url, updated, prepareHeaders(token));
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update record: ${error.message}`);
  }
}

const deleteRecord = async (projectTag, tableName, id, token) => {
  try {
    const url = `https://api.dotenx.com/database/query/delete/project/${projectTag}/table/${tableName}/row/${id}`;
    const response = await axios.post(url, {}, prepareHeaders(token));
    return response.data;
  } catch (error) {
    throw new Error(`Failed to delete record: ${error.message}`);
  }
}

const prepareHeaders = (token) => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      // Authorization: `Bearer ${authService().getToken()}`,
    },
  }
}

export {
  getRecordById,
  getRecords,
  addRecord,
  updateRecord,
  deleteRecord,
}