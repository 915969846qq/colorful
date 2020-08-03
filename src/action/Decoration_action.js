const getAllData = (mydata) => {
  console.log(mydata)
  return {
    type: 'Decoration_data',
    data: mydata,
  }
}
module.exports = {
  getAllData,
}
