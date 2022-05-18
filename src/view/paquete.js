import Card from '../components/layout_items/card.js'
export default function Paquete() {

    // const showTodos = tareas.map((todo,i)=>{
    //     return(
    //       <Card props={todo} fun={()=>handleDeleteTask(todo.title)} >
    //      </Card>
    //     )
    //   })


    const addFavorite = (e) => { }

    const paqueteCard = () => {

        for (var i = 0; i < 9; i++) {
            return (
                <Card
                    nombre={'Paquete 1'}
                    image={'playa.jpg'}
                    texto={'Descripción'}
                    lugar={'Cota Rica'}
                    precio={'$200'}
                    empresa={'Gaia S.A'}
                    fun={(e) => addFavorite(e)}
                    mostar={true}
                />
            )
        }
    }

    return (
        <main>
            <div className='col col-md-8'>
                <div className='row'>
                    {paqueteCard}
                </div>

            </div>
        </main>
    )


}
