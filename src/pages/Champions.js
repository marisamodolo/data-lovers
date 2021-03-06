import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import ChampModal from '../components/ChampModal'
import ChampIcon from '../components/ChampIcon';
import Chart from '../components/Chart';
import './Champions.css'

export default function (props) {
  const [data, setData] = useState([]);
  const [choosenModal, setChoosenModal] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCompareSelected, setIsCompareSelected] = useState(false);
  const [arrayChamp, setArrayChamp] = useState([]);

useEffect(() => {
  fetch('https://ddragon.leagueoflegends.com/cdn/9.13.1/data/pt_BR/championFull.json')
  .then(response => response.json())
  .then(values =>  setData(Object.values(values["data"])))
}, [])

useEffect(() => {
  console.log(arrayChamp)
}, [arrayChamp])

function showChampions(currentArray){
  return currentArray.map((champ, index) => {
    const source = "https://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/" + champ["image"].full;
    return <ChampIcon id={champ["id"]} key={index} text={champ["name"]} imgsrc={source}
    onClick={() => { isCompareSelected ? compare(champ) : setModalIsOpen(true); setChoosenModal(champ);}}/>
  })
}

function compare(champ) {
  const hasAlready = arrayChamp.findIndex(current => current.id === champ.id);
  hasAlready !== -1 ?
  arrayChamp.splice(hasAlready, 1) : setArrayChamp(() => { return [...arrayChamp, { ...champ}] })
}

  return (
    <div className="div-main">
      <nav className="header-nav">
        <ul className="nav-ul">
          <li><a className="nav-li" href="index.html">Sobre</a></li>
          <li><a className="nav-li" href="champions.html">Campeões</a></li>
          <li><a className="nav-li" href="https://signup.br.leagueoflegends.com/pt/signup/index#/" target="_blank" rel="noopener noreferrer">Jogue!</a></li>
        </ul>
      </nav>
      <button onClick={() => setIsCompareSelected(!isCompareSelected)}>compare</button>
      {/* <Chart chartValues={arrayChamp}></Chart> */}
      <section className="champion-list">
        {showChampions(data)}
      </section>
      <Modal className="modal-style" isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
        <ChampModal champion={choosenModal} onClickClose={()=>setModalIsOpen(false)}/>
      </Modal>
    </div>
  );
}