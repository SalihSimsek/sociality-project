module.exports = class BaseService{
    async findAll(){
        return this.model.find()
    }

    async find(id){
        return this.model.findById(id)
    }

    async add(item){
        return this.model.create(item)
    }
}