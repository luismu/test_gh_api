
exports.setup = (req, res) =>{

    var cols = req.body.cols
    var rows = req.body.rows
    
    biarray = make2darray(cols, rows);
    
    for(var i=0; i < cols; i++){
  
      for(var j=0; j< rows; j++){
        biarray[i][j] = Math.random()>0.5 ? 1 : 0;
      }
    }
    
    return res.status(200).send({
        biarray, message: "matrix created."})

    
    function make2darray(cols, rows){
        var arr = new Array(cols);
            for(var i = 0; i<arr.length; i++){
            arr[i] = new Array(rows);
        }
        return arr;
    }


}

    
