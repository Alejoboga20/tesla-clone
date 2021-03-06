import Header from './components/Header';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './components/Item';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app__itemsContainer'>
        <Item
          title='Lowest Cost Solar Panels in America'
          desc='Money-back guarentee'
          descLink=''
          backgroundImg={SolarPanels}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          title='Model S'
          desc='Order Online for Touchless Delivery'
          descLink=''
          backgroundImg={ModelS}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Model 3'
          desc='Order Online for Touchless Delivery'
          descLink=''
          backgroundImg={Model3}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Model Y'
          desc='Order Online for Touchless Delivery'
          descLink=''
          backgroundImg={ModelY}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Model X'
          desc='Order Online for Touchless Delivery'
          descLink=''
          backgroundImg={ModelX}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='SolarRoof'
          desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Accessories'
          desc=''
          descLink=''
          backgroundImg={Accessories}
          leftBtnTxt='SHOP NOW'
          leftBtnLink=''
          rightBtnTxt=''
          rightBtnLink=''
        />
      </div>
    </div>
  );
}

export default App;
