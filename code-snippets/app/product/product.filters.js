angular.module("product.filters", [])
.filter("byYear", function() {
    return function(products, year) {
        
        if (!products)
            return;
        
        if (!year) 
            return products;
        
        var results = [];
        angular.forEach(products, function(product){
            console.log(product.year);
            if (product.year == year) {
                results.push(product);
            }
        })

        return results;
    }
})