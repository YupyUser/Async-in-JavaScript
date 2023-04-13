    setTimeout(0,console.log(1));


    console.log(2);


    Promise.resolve().then(()=> console.log(3));


    new Promise((res) => {
        console.log(4)
        res(null);
    }).then(()=> console.log(5));

    
    console.log(6);


    Promise.resolve().then(()=> console.log(7));

    new Promise((res) => {
        console.log(8)
        res(null);
    }).then(()=> console.log(9));
    
