import React from 'react';
import List from './components/List';
import data from"./helper/data";
import {useState} from 'react';


function App() {
  const [index,setIndex] = useState (0)
  
  const [employer,setEmployer] = useState (data.slice(0,5))
  //+burada data.js deki verileri employer adı ile aldık ve 5er 5er parçaladık
  const handleNext = () =>{
    //+BURADA DİYORUZ Kİ NEXT BUTONUNA TIKLANDIĞINDA index dartanın indexine eşit oluncaya kadar 5 er 5er artır fakat 
    if(index<data.length - 5){
  setIndex(index+5)
  //+artırırken eski 5 liyi değil yalnız yeni gelen 5 li yi yazdır datanın lengtine eşit olunca dur birşey yapma
  setEmployer(data.slice(index+5,index+10))} 
  } 
  
  const handlePrev = () =>{
    //+burada da prev butonuna tıklandığında yukarıdakinin tersini yap yani indexi 5 er 5er azalt ve 
    if(index>0){
      setIndex(index-5)
      //+ekrana sadece yeni 5 liyi yazdır
      setEmployer(data.slice(index-5,index))}
  
  }
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {index+1} to {index+5})
        </h5>
        <List data={employer} />
        <div className='btns'>
        <button onClick={handlePrev} >Prev</button>
          <button onClick={handleNext} >Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
