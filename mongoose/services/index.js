/**
 * @param {MongooseModel} model 
 * @returns the max id + 1
 */
 const generateId = async model => {
    const items = await model.find();
    const maxId = items.reduce((result, item) => {
        return result = parseInt(item._id) > result
            ? item._id
            : result;
    }, 0);
    const id = parseInt(maxId) + 1;
    console.log(`generated id '${id}' for model '${model.modelName}'`);
    return id;
}


module.exports = {
    generateId
};