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

var items = [
    {
        id : "item1",
        itemName : "Butter Roti",
        rate : 20,
        taxes : [
            {
                name : "Service Charge",
                rate : 10,
                isInPercent : 'Y'
            },
            {
                name : "GST",
                rate : 18,
                isInPercent : 'Y'
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
                isInPercent : 'Y'
            },
            {
                name : "GST",
                rate : 18,
                isInPercent : 'Y'
            },
            {
                name : "Service Tax",
                rate : 10,
                isInPercent : 'Y'
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
                isInPercent : 'Y'
            },
            {
                name : "Service Tax",
                rate : 10,
                isInPercent : 'Y'
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
                isInPercent : 'Y'
            },

        ],
        category : {
            categoryId : "C1"
        }

    },
            

]


var Bill = {
    id : "B1",
    billNumber : 1,
    opentime : "06 Nov 2020 14:19",
    customerName : "CodeQuotient",
    billItems : [
        {
            id : "item2",
            quantity : 3,
            discount : {
                rate : 10,
                isInPercent : 'Y'
            }

        },
        {
            id : "item1",
            quantity : 9,
            discount : {
                rate : 10,
                isInPercent : 'Y'
            }

        },
        {
            id : "item4",
            quantity : 2,
            discount : {
                rate : 15,
                isInPercent : 'Y'
            }

        }
    ]
}



let total_sum=0;
for(let i=0;i<Bill.billItems.length;i++){
    let sum=0
    let billItemId=Bill.billItems[i].id;
    let quantity=Bill.billItems[i].quantity;
    let discount=Bill.billItems[i].discount.rate;
    for(let j=0;j<items.length;j++){
        if(items[j].id==billItemId){
            sum=sum+(items[j].rate);
            sum=sum-((sum)*(discount)/100);
            let cum_sum=sum;
            for(let k=0;k<items[j].taxes.length;k++){
                let tax=items[j].taxes[k].rate
                tax=(cum_sum)*(tax)/100;
                sum=sum+tax;
            }
            sum=sum*quantity;
            total_sum=total_sum+sum;
        }
    }
}
document.write(total_sum);
