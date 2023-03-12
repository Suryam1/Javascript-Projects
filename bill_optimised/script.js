let Categories = [
    {
        id : "C1",
        categoryName : "Platters",
        superCategory : {
    
            superCategoryName : "South Indian",
            id : "SC1"
        }
    },
    
    {
        id : "C2",
        categoryName : "Tandoor",
        superCategory : {
    
            superCategoryName : "North Indian",
            id : "SC2"
        }
    },
    
    {
        id : "C3",
        categoryName : "Dosa",
        superCategory : {
    
            superCategoryName : "South Indian",
            id : "SC3"
        }
    },
    
    {
        id : "C4",
        categoryName : "Vegetables",
        superCategory : {
    
            superCategoryName : "North Indian",
            id : "SC4"
        }
    }
]

var menu = [
    {
        id : "item1",
        itemName : "Butter Roti",
        rate : 20,
        taxes : [
            {
                name : "Service Charge",
                rate : 10,
                isInPercent : true
            },
            {
                name : "GST",
                rate : 18,
                isInPercent : true
            },

        ],
        category : {
            categoryId : "C2"
        }

    },

    {
        id : "item2",
        itemName : "Paneer Butter Masala",
        rate : 120,
        taxes : [
            {
                name : "Service Charge",
                rate : 10,
                isInPercent : true
            },
            {
                name : "GST",
                rate : 18,
                isInPercent : true
            },
            {
                name : "Service Tax",
                rate : 10,
                isInPercent : true
            },
            


        ],
        category : {
            categoryId : "C4"
        }

    },

    {
        id : "item3",
        itemName : "Masala Dosa",
        rate : 50,
        taxes : [
            {
                name : "GST",
                rate : 18,
                isInPercent : true
            },
            {
                name : "Service Tax",
                rate : 10,
                isInPercent : true
            },
            


        ],
        category : {
            categoryId : "C3"
        }

    },

    {
        id : "item4",
        itemName : "Dosa Platter",
        rate : 150,
        taxes : [
            
            {
                name : "Service Tax",
                rate : 10,
                isInPercent : true
            },

        ],
        category : {
            categoryId : "C1"
        }

    },
            

]


var bill = {
    "id":"B1",
    "billNumber":10,
    "openTime":"12/01/2021, 10:43:39",
    "customerName":"CodeQuotient",
    "billItems":[
      {
       "id":"item2",
       "quantity":3,
       "discount":{
         "rate":10,
         "isInPercent":false
       }
      },
      {
       "id":"item1",
       "quantity":15,
       "discount":{
         "rate":10,
         "isInPercent":true
       }
      },
      {
       "id":"item4",
       "quantity":2,
       "discount":{
         "rate":20,
         "isInPercent":false
       }
      },
      {
       "id":"item3",
       "quantity":5,
       "discount":{
         "rate":5,
         "isInPercent":true
       }
      }
    ]
   }
// console.log(bill);
//    bill=JSON.parse(bill);
// function roundToTwo(num) {
//     return +(Math.round(num + "e+2")  + "e-2");
// }

let billItems = [];
let totalBillAmount=0;
bill.billItems.forEach(function(billitems1){
    let sum=0
    menu.forEach(function(item,x,y){
        if(item.id==billitems1.id){
            sum=sum+(item.rate);
            let discountedAmount=billitems1.discount.rate;
            if(billitems1.discount.isInPercent){
                discountedAmount=(sum)*(billitems1.discount.rate)/100;
            }
            sum=sum-discountedAmount;
            let cum_sum=sum;
            item.taxes.forEach(function(element,index,taxes){
                let tax=element.rate;
                if(element.isInPercent){
                    tax=(cum_sum)*(tax)/100;
                }
                sum=sum+tax;
            })
            sum=sum*(billitems1.quantity);
            totalBillAmount=totalBillAmount+sum;
            let finalString=`${item.itemName}@${item.rate} x ${billitems1.quantity} = ${parseFloat(sum).toFixed(2)}`;
            billItems.push(finalString);
        }
    })
})
totalBillAmount=parseFloat(totalBillAmount).toFixed(2);
document.write(totalBillAmount+"<br>");
billItems.forEach(function(element){
    document.write(element+"<br>");
})
