// let customers=[
//     {
//         id:"C001",
//         name:"nimal",
//         address:"panadura",
//         age:12
//     }
// ];

// let items=[
//     {
//         itemCode:"I001",
//         description:"bla bla",
//         stock:20
//     }
// ];

// let orders=[
//     {
//         customerId:"C001",
//         cutomerName:"saman",
//         items:[
//             {
//                 itemCode:"I001",
//                 qty:2,
//                 total:2500.00
//             }
//         ]

//     }
// ];

function handleOrder(){
    let cusId=document.getElementById("cusId").value;
    let cusName=document.getElementById("cusName").value;
    let cusAddress=document.getElementById("cusAddress").value;
    let cusAge=document.getElementById("cusAge").value;

    let itemCode=document.getElementById("itemCode").value;
    let itemDescription=document.getElementById("item-description").value;
    let itemStock=document.getElementById("item-stock").value;

    let price = 3000;
    let customers=[
        {
            id:cusId,
            cusName: cusName,
            address:cusAddress,
            age:cusAge
        }
    ];

    let items=[
        {
            itemCode:itemCode,
            itemDescription:itemDescription,
            itemStock:itemStock
        }

    ];

    let orders=[
        {
            itemCode:itemCode,
            qty:itemStock,
            total:qty*price
        }
    ]

}

