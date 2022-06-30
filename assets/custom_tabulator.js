window.myNamespace = Object.assign({}, window.myNamespace, {
    tabulator: {
        searchFunc: function (term, values) { //search for exact matches
            var matches = [];
    
            values.forEach(function(value){
                //value - one of the values from the value property
    
                if(value === term){
                    matches.push(value);
                }
            });
    
            return matches;
        },
        printIcon: function (cell, formatterParams, onRendered) {
            return "<i class='fa fa-print'></i>";
        },
        columnResized : function (column, table) {
            console.log("Column is resized");
            console.log(column);
            console.log(column._column.field)
            
            // send data back to dash, still under work, only updates when state changes
            // be aware of table rendering and resetting back to original display
            //table.props.setProps({"columnResized": column._column.field})
        },
        // based on http://tabulator.info/docs/4.8/column-calcs#func-custom
        ageCalc: function(values, data, calcParams){
            //values - array of column values
            //data - all table data
            //calcParams - params passed from the column definition object
        
            var calc = 0;
        
            values.forEach(function(value){
                if(value > 18){
                calc ++;
                }
            });
        
            return calc;
        }
    }
});