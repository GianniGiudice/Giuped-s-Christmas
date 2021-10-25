import {database} from "../firebaseConfig";
import {useEffect, useState} from "react";


export const User = ({color, user}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        refreshDataList()
    }, [])

    const refreshDataList = () => {
        const response = database.ref(user)
        response.on('value', (snapshot) => {
            const array = snapshot.val()
            setDataList(array)
        })
    }

    const addItem = async () => {
        setModalVisible(false)
        let array = dataList ? [...dataList] : []
        array.push(
            {
                "name": name,
                "link": link
            }
        )
        await database.ref(user).set(array)
        refreshDataList()
    }

    const deleteItem = async (index) => {
        let array = [...dataList]
        array.splice(index, 1)
        await database.ref(user).set(array)
        refreshDataList()
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleLinkChange = (event) => {
        setLink(event.target.value)
    }

    return (
        <div className="col-lg-3 col-md-6">
            <div className={"user bg-" + color + " rounded"}>
                <div className="user-header">
                    <img src={"/" + user + ".jpg"} className="rounded-circle" alt="Carla"/>
                </div>
                <div className="user-text user-list">
                    {dataList && dataList.length > 0 && <ol className="list-group list-group-numbered">
                        {dataList.map((element, index) => {
                            return <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{element.name}</div>
                                    <a href={element.link} target="_blank">Lien vers le produit</a>
                                </div>
                                <span className="badge bg-red rounded-pill" onClick={() => {deleteItem(index)}}>X</span>
                            </li>
                        })}
                    </ol>}
                </div>
                <div className="mt-3">
                    <button onClick={() => {
                        setModalVisible(true)
                    }} className="btn bg-white w-100">Ajouter</button>
                </div>
            </div>

            <div className="modal text-dark" style={{ display: modalVisible ? "block" : "none" }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Ajout sur la liste</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close" onClick={() => {
                                        setModalVisible(false)
                            }}/>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="formGroupExampleInput"
                                           placeholder="Nom du cadeau" value={name} onChange={handleNameChange}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="formGroupExampleInput2"
                                           placeholder="Lien du cadeau" value={link} onChange={handleLinkChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn bg-red text-white" onClick={addItem}>Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}