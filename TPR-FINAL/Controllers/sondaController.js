import sondaService from "../Services/sondaService.js";

class SondaController{
    sondaService = new sondaService();

    insertSonda = async (req, res) => {

        try {
            const { id, temperatura } = req.body;
            console.log(req.body)
            const data = await this.sondaService.insertSondaService({ id, temperatura });
            res.status(201).send({ success: true, return: data, message: `La sonda fue creada con éxito` });
        } catch (error) {
            res.status(403).send({ success: false, message: error.message });
        }
    }

    getSondas = async (req,res) => {
        try {                    
            const data = await this.sondaService.getSondasService();            
            res.status(200).send(data);
        } catch (error) {
            res.status(400).send("no hay sondas");
        }
    }

    getSondasId = async (req, res) =>{
        try {
            const { id } = req.params;
            const data = await this.sondaService.getIdService(id);            
            res.status(200).send(data);
        }catch(error){
            res.status(400).send("no hay sondas");
        }
    }

}

export default SondaController