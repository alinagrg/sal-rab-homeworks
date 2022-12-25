function sendRequest(name, phone, address, goods, sum) {
    let data = {client: '', order: {}, goods: []};

        let client = name + ' ';
        client = client + phone;
        data.client = client;

    let countOfGoods = goods.length;
    for (let i = 0; i < countOfGoods; i += 1) {
        good = {title: goods[i].title, count: goods[i].count};
        data.goods.push(good);
    }
    data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв. ${address.flat}`;
    data.order.sum = sum;
    data = {data: data};

    let jsonData = JSON.stringify(data);


    return jsonData;
}