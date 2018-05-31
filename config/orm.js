var connection = require('./connection');

var orm = {

    selectAll : function (callback){
        connection.query('SELECT * FROM burgers', function (err, result){
            if (err) throw err;
            callback(result);
        });
    },

    insertOne: function(burger_name, callback) {
        connection.query("INSERT INTO burgers SET ?", [burgerName], function (err, result){
            if (err) throw err;
            callback(result);
        })
    },

   updateOne:function(burgerID, callback){
       connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerID}], function (err, result){
           if (err) throw err;
           callback(result);
       });
   } 
};

module.exports = orm;