'use strict'

var seattle = {
    minPeople: 23,
    maxPeople: 65,
    avgCookie: 6.3,
    cookieTotal: 0,
    render: function() {
        var clock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        for (var i = 0; i < 14; i++) {
            var seattleCustomers = Math.random() * (this.maxPeople - this.minPeople + 1) + this.minPeople;
            var cookiesBaked = seattleCustomers * this.avgCookie;
            cookiesBaked = Math.ceil(cookiesBaked);
            this.cookieTotal = this.cookieTotal + cookiesBaked;
            var parent = document.getElementById('seattle');
            var listItem = document.createElement('li');
            listItem.textContent = `${clock[i]} make ${cookiesBaked} cookies`;
            parent.appendChild(listItem);

        }
        document.getElementById('seattleTotal').innerHTML = `Bake ${this.cookieTotal} cookies in total for the whole day.`;
    }
}
seattle.render();

var tokyo = {
    minPeople: 3,
    maxPeople: 24,
    avgCookie: 1.2,
    cookieTotal: 0,
    render: function() {
        var clock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        for (var i = 0; i < 14; i++) {
            var tokyoCustomers = Math.random() * (this.maxPeople - this.minPeople + 1) + this.minPeople;
            var cookiesBaked = tokyoCustomers * this.avgCookie;
            cookiesBaked = Math.ceil(cookiesBaked);
            this.cookieTotal = this.cookieTotal + cookiesBaked;
            var parent = document.getElementById('tokyo');
            var listItem = document.createElement('li');
            listItem.textContent = `${clock[i]} make ${cookiesBaked} cookies`;
            parent.appendChild(listItem);

        }
        document.getElementById('tokyoTotal').innerHTML = `Bake ${this.cookieTotal} cookies in total for the whole day.`;
    }
}
tokyo.render();



var dubai = {
    minPeople: 11,
    maxPeople: 38,
    avgCookie: 3.7,
    cookieTotal: 0,
    render: function() {
        var clock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        for (var i = 0; i < 14; i++) {
            var dubaiCustomers = Math.random() * (this.maxPeople - this.minPeople + 1) + this.minPeople;
            var cookiesBaked = dubaiCustomers * this.avgCookie;
            cookiesBaked = Math.ceil(cookiesBaked);
            this.cookieTotal = this.cookieTotal + cookiesBaked;
            var parent = document.getElementById('dubai');
            var listItem = document.createElement('li');
            listItem.textContent = `${clock[i]} make ${cookiesBaked} cookies`;
            parent.appendChild(listItem);

        }
        document.getElementById('dubaiTotal').innerHTML = `Bake ${this.cookieTotal} cookies in total for the whole day.`;
    }
}
dubai.render();

var paris = {
    minPeople: 20,
    maxPeople: 38,
    avgCookie: 2.3,
    cookieTotal: 0,
    render: function() {
        var clock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        for (var i = 0; i < 14; i++) {
            var parisCustomers = Math.random() * (this.maxPeople, this.minPeople + 1) + this.minPeople;
            var cookiesBaked = parisCustomers * this.avgCookie;
            cookiesBaked = Math.ceil(cookiesBaked);
            this.cookieTotal = this.cookieTotal + cookiesBaked;
            var parent = document.getElementById('paris');
            var listItem = document.createElement('li');
            listItem.textContent = `${clock[i]} make ${cookiesBaked} cookies`;
            parent.appendChild(listItem);

        }
        document.getElementById('parisTotal').innerHTML = `Bake ${this.cookieTotal} cookies in total for the whole day.`;
    }
}
paris.render();


var lima = {
    minPeople: 2,
    maxPeople: 16,
    avgCookie: 4.6,
    cookieTotal: 0,
    render: function() {
        var clock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        for (var i = 0; i < 14; i++) {
            var limaCustomers = Math.random() * (this.maxPeople - this.minPeople + 1) + this.minPeople;
            var cookiesBaked = limaCustomers * this.avgCookie;
            cookiesBaked = Math.ceil(cookiesBaked);
            this.cookieTotal = this.cookieTotal + cookiesBaked;
            var parent = document.getElementById('lima');
            var listItem = document.createElement('li');
            listItem.textContent = `${clock[i]} make ${cookiesBaked} cookies`;
            parent.appendChild(listItem);

        }
        document.getElementById('limaTotal').innerHTML = `Bake ${this.cookieTotal} cookies in total for the whole day.`;
    }
}
lima.render();