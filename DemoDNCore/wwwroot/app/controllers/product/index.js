var productController = function () {
    this.initialize = function () {
        loadData();
    }

    function registerEvent() {

    }

    function formatNumber (number, precision) {
        if (!isFinite(number)) {
            return number.toString();
        }
        var a = number.toFixed(precision).split('.');
        a[0] = a[0].replace(/\d(?=(\d{3})+$)/g, '$&,');
        return a.join('.');
    }

    function loadData() {
        var template = $('#table-template').html();
        var render = "";
        $.ajax({
            type: 'GET',
            url: '/admin/product/GetAll',
            dataType: "json",
            success: function (res) {
                $.each(res, function (i, item) {
                    render += Mustache.render(template, {
                        Id: item.Id,
                        Name: item.Name,
                        Image: item.Image == null ? '<img src="/admin-side/images/user.png" width=25' : '<img src="' + item.Image + '" width=25 />',
                        CategoryName: item.ProductCategory.Name,
                        Price: formatNumber(item.Price, 0),
                        CreatedDate: sd.dateTimeFormatJson(item.DateCreated),
                        Status: sd.getStatus(item.Status)
                    });
                    if (render != '') {
                        $('#tbl-content').html(render);
                    };
                });
            },
            error: function (status) {
                console.log(status);
                sd.notify('Cannot loading data', 'error');
            }
        });
    }
}