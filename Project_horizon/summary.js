onload();
function onload(){
  displayProductSummary();
}

function  displayProductSummary(){
  let product=[
    {
      id:'1',
      product_images:'images/product/img1.webp',
      brand_names:'CANON',
      product_names:'PIXMA G1430',
      type:'Home Printer | Ink Jet Printer',
      price:{
        cost_prices:'10,000',
        marked_prices:'12,000',
        discounts:'30',
      }
    },
    {
      id:'2',
      product_images:'images/product/img2.png',
      brand_names:'CANON',
      product_names:'Pixma G3730',
      type:'Home Printer | Ink Jet Printer',
      price:{
        cost_prices:'22,000',
        marked_prices:'25,000',
        discounts:'30',
      }
    },
    {
      id:'3',
      product_images:'images/product/img3.jpg',
      brand_names:'HP',
      product_names:'LaserJet 107',
      type:'Small 0ffice Printer | Laser Printer',
      price:{
        cost_prices:'15,999',
        marked_prices:'22,000',
        discounts:'30',
      }
    },  {
      id:'4',
      product_images:'images/product/img5.jpg',
      brand_names:'Brother',
      product_names:'DCP-L2510D  ',
      type:'Home & Office Printer | Laser Printer',
      price:{
        cost_prices:'31,999',
        marked_prices:'33,000',
        discounts:'3',
      }
    },{
      id:'5',
      product_images:'images/product/img4.jpg',
      brand_names:'Pantum',
      product_names:'P2509W',
      type:'Home & Office Printer | Laser Printer',
      price:{
        cost_prices:' 22,500',
        marked_prices:'25,000',
        discounts:'30',
      }
    },{
      id:'6',
      product_images:'images/product/img6.jpg',
      brand_names:'Brother',
      product_names:'DCP L2540DW',
      type:'Office Printer | Laser Printer',
      price:{
        cost_prices:'32,625',
        marked_prices:'43,500',
        discounts:'25',
      }
    },{
      id:'7',
      product_images:'images/product/img7.jpg',
      brand_names:'Pantum',
      product_names:'M6505',
      type:'Small Office Printer | Laser Printer',
      price:{
        cost_prices:'24,000',
        marked_prices:' 35,000',
        discounts:'31',
      }
    },{
      id:'8',
      product_images:'images/product/img8.jpg',
      brand_names:'CANON',
      product_names:'Pixma GM4070',
      type:'Office Printer | Ink jet Printer',
      price:{
        cost_prices:' 35,000',
        marked_prices:' 38,000',
        discounts:'30',
      }
    },{
      id:'9',
      product_images:'images/product/img9.png',
      brand_names:'HP',
      product_names:'Laser MFP 135a',
      type:'Office Printer | Laser Printer',
      price:{
        cost_prices:' 31,000',
        marked_prices:' 35,000',
        discounts:'30',
      }
    },{
      id:'10',
      product_images:'images/product/img10.png',
      brand_names:'HP',
      product_names:'MGD MFP E72425DN ',
      type:'Big Office Printer | Laser Printer',
      price:{
        cost_prices:'528,000',
        marked_prices:'535,000',
        discounts:'1',
      }
    }
    
    
  ]
  summary_container=document.querySelector('.summary_container');
  
  
  summary_container.innerHTML=`
  <div class="summary_container">  
  <img src="images/product/img1.webp" alt="">

      <div class="specification">
        
        <p>Brand:</p>
        <p>Model:</p>
        <p>Types:</p>
        <p>Specification:</p>

        </div>
        
        <div class="prices">
          <p>Marked Price:</p>
          <p>Discount:</p>
          <p>Total Cost:</p>
        </div>
      </div>`;


      
}
