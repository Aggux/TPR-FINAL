class Sonda{
    sondas = []

    agregarSonda = async (sonda) =>{
        this.sondas.push(sonda)
    }

    getAll = async () => {
        return this.sondas;
    }

    getId = async (id) =>{
        const sondasFiltradas = []
        this.sondas.forEach(sonda => {
            if(sonda.id == id){
                sondasFiltradas.push(sonda)
            }
        })
        return sondasFiltradas
    }
}

export default Sonda