import Sonda from "../Models/sonda.js"

class SondaService{
    sondaModel = new Sonda();

    insertSondaService = async (sonda) => {
        try {
            const sondaValidate = this.validarSonda(sonda);
            if (sondaValidate) {
                await this.sondaModel.agregarSonda(sonda);
                return sonda;
            }
        } catch (error) {
            throw error;
        }
    }

    validarSonda(sonda) {
        if ((sonda.id < 1 || sonda.id > 5) || !/^\d+$/.test(sonda.id) || (sonda.temperatura < -20 || sonda.temperatura > 100) || !/^\d+$/.test(sonda.temperatura)) {
            throw new Error("datos no válidos");
        } else {
            return true;
        }
    }

    getSondasService = async () => {
        try {           
            const data = await this.sondaModel.getAll();
            if(!data) throw error;
            return data
        } catch (error) {
            throw error
        }
    }

    getIdService = async (id) =>{
        try {
            const data = await this.sondaModel.getId(id);
            if(!data) throw error;
            return data
        }catch(error){
            throw error
        }
    }
}

export default SondaService