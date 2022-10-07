    let ProductMaster=[
        { name:'Pepsi',category:'Food',	sellprice:15,	buyPrice:2},
        { name:'Pepsodent',	category:'Toothpaste',	sellprice:10,	buyPrice:8},
        { name:'Mirinda',	category:'Food',	sellprice:20,	buyPrice:20},
        { name:'Dettol',	category:'Soap',	sellprice:16,	buyPrice:5},
        { name:'Sensodyne',category:'Toothpaste',	sellprice:25,	buyPrice:12},
        { name:'Savlon',	category:'Soap',	sellprice:10,	buyPrice:3},
        { name:'Appy',	category:'Food',	sellprice:35,	buyPrice:9},
        {name:'Sunsilk',	category:'Shampoo ',	sellprice:12,	buyPrice:11},
        { name:'Dove',	category:'Shampoo ',	sellprice:15,	buyPrice:7},
        { name:'Meswak',	category:'Toothpaste',	sellprice:8,	buyPrice:15},
        { name:'DairyMilk',	category:'Food',	sellprice:30,	buyPrice:4}
    ];

    function showDetails(){
        let  proMap=ProductMaster.map(function(per){
            let str='<tr class=\''+getClassPerson(per)+'\'>';
            str+='<td class="col1">'+per.name+'</td>';
            str+='<td class="col1">'+per.category+'</td>';
            str+='<td class="col1">'+per.sellprice+'</td>';
            str+='<td class="col1">'+per.buyPrice+'</td>';
            str+='</tr>';
            return str;
        });
        let header='<tr>';
        header+='<th class=\'th1\' onclick=\'sort(0)\'>Name</th>';
        header+='<th class=\'th1\' onclick=\'sort(1)\'>Category</th>';
        header+='<th class=\'th1\' onclick=\'sort(2)\'>Sellprice</th>';
        header+='<th class=\'th1\' onclick=\'sort(3)\'>buyPrice</th>';
        header+='</tr>';
        let html='<table class="table1">'+header+proMap.join('')+'</table>';
        let ele=document.getElementById('productTable');
        ele.innerHTML=html;
    }

    function getClassPerson(){

    }
    let CatagoryOpt=['Food','Soap','Shampoo','Toothpaste'];
    function addnewpro(){
        let str='<h2>Add New Product in Table</h2><br/><br/>'
        str+='Name:<input type="text" id="name"><br/><br/>';
        str+=makeCodeDD('catg',CatagoryOpt,'Select The Catagory')+'<br/><br/>';
        str+='Sell price:<input type="text" id="sellpri"><br/><br/>';
        str+='Buy Price:<input type="text" id="buyPri"><br/><br/>';
        str+='<button class="btn" onclick=\'addproduct()\'>Add Product</button>';
        let div=document.getElementById('productTable');
        div.innerHTML=str;
    }

    function addproduct(){
        let st={};
        st.name=document.getElementById('name').value;
        let index=ProductMaster.findIndex(function(per){
        return per.name==st.name;
        });
        if(index>=0){
            alert('Already The name is in the databas');
        }
        else{
            console.log(st.name);
            st.category=document.getElementById('catg').value;
            st.sellprice=document.getElementById('sellpri').value;
            st.buyPrice=document.getElementById('buyPri').value;
            console.log(st);
            ProductMaster.push(st);
            showDetails()
        }
    }
    function makeCodeDD(id,arr,first,selVal){
        const arr1=arr.map(function(opt){
            if(opt==selVal)
                return '<option selected>'+opt+'</option>';
            else
                return '<option>'+opt+'</option>';
        });
        let header='<option>'+first+'</option>';
        if(selVal=='')
            header='<option>'+first+'</option>';
        
        let s1='<select id=\''+id+'\'>'+header+arr1.join('')+'</select>';
        return s1;
    }


    //for purchase master
    let purchaseMaster=[
        { name:'Pepsi',Quantity:3,	price:15,	value:45},
    ];
    function purchaseMasterTable(){
        let  proMap=purchaseMaster.map(function(per){
            let str='<tr>';
            str+='<td class="col1">'+per.name+'</td>';
            str+='<td class="col1">'+per.Quantity+'</td>';
            str+='<td class="col1">'+per.price+'</td>';
            str+='<td class="col1">'+per.value+'</td>';
            str+='</tr>';
            return str;
        });
        let header='<tr>';
        header+='<th class=\'th1\' onclick=\'sort(0)\'>Name</th>';
        header+='<th class=\'th1\' onclick=\'sort(1)\'>Quantity</th>';
        header+='<th class=\'th1\' onclick=\'sort(2)\'>Price</th>';
        header+='<th class=\'th1\' onclick=\'sort(3)\'>Value</th>';
        header+='</tr>';
        let html='<table class="table1">'+header+proMap.join('')+'</table>';
        let ele=document.getElementById('productTable');
        ele.innerHTML=html;
    }

    function addnewpurchase(){
        let str='<h2>Add New Purchase Product in Table</h2><br/><br/>'
        str+=makeDD('purchase',ProductMaster,'Select The Product')+'<br/><br/>';
        str+='Quality:<input type="text" id="qty"><br/><br/>';
        str+='<button class="btn" onclick=\'newPurchase()\'>Add Product</button>';
        let div=document.getElementById('productTable');
        div.innerHTML=str;
    }

    function newPurchase(){
        let st={};
        st.name=document.getElementById('purchase').value;
        let perproduct=ProductMaster.find(function(per){
        return per.name==st.name;
        });
        let perpro=purchaseMaster.find(function(per){
        return per.name==st.name;
        });
        let index=purchaseMaster.findIndex(function(per){
            return per.name==st.name;
        });
        if(index>=0){
            console.log(st.name);
            Quantity=document.getElementById('qty').value;
            Quantity=Quantity*1;
            Quantity+=perpro.Quantity;
            perpro.Quantity=Quantity;
            perpro.price=perproduct.sellprice;
            let value=perproduct.sellprice*perpro.Quantity;
            perpro.value=value;
            st.value=value;
            purchaseMasterTable()
        }
        else{
            console.log(st.name);
            st.Quantity=document.getElementById('qty').value;
            let value=perproduct.sellprice*st.Quantity;
            st.price=perproduct.sellprice;
            st.value=value;
            console.log(st);
            purchaseMaster.push(st);
            purchaseMasterTable()
        }           
           
    }

    function makeDD(id,arr,first,selVal){

        const arr1=arr.map(function(opt){
            if(opt.name==selVal)
                return '<option selected>'+opt.name+'</option>';
            else
                return '<option>'+opt.name+'</option>';
        });
        let header='<option>'+first+'</option>';
        if(selVal=='')
            header='<option>'+first+'</option>';
        
        let s1='<select id=\''+id+'\'>'+header+arr1.join('')+'</select>';
        return s1;
    }