import './App.css';


export default function App (){
  return <>
 <div className='container'> 
<div className='pic' />

<div className='everything'>
<p className='perf'>PERFUME</p>
<h1>Gabrielle Essence Eau De Parfum</h1>
<p className='desc'>
  A floral, solar and voluptous interpretation composed by Olivier Polge, Perfumer-Creator for the house of CHANEL
</p>

  <h2>$149.99 <s>$169.99</s></h2>
  <button id='butt' ><img alt='icon-cart' src='./icon-cart.svg' width={50} height={50} ></img>Add to cart</button>
</div>

 </div>

  </>
}