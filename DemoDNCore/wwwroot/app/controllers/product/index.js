var productController = function () {
    this.initialize = function () {
        loadData();
        registerEvent();
    }

    function registerEvent() {
        $('#ddlShowPage').on('change', function () {
            sd.configs.pageSize = $(this).val();
            sd.configs.pageIndex = 1;
            loadData(true);
        })
    }

    function formatNumber(number, precision) {
        if (!isFinite(number)) {
            return number.toString();
        }
        var a = number.toFixed(precision).split('.');
        a[0] = a[0].replace(/\d(?=(\d{3})+$)/g, '$&,');
        return a.join('.');
    }

    function loadData(isPageChanged) {
        var template = $('#table-template').html();
        var render = "";
        $.ajax({
            type: 'GET',
            data: {
                categoryId: null,
                keyword: $('#txtKeyword').val(),
                page: sd.configs.pageIndex,
                pageSize: sd.configs.pageSize
            },
            url: '/admin/product/GetAllPaging',
            dataType: "json",
            success: function (res) {
                console.log(res);
                $.each(res.Results, function (i, item) {
                    render += Mustache.render(template, {
                        Id: item.Id,
                        Name: item.Name,
                        Image: item.Image == null ? '<img src="/admin-side/images/user.png" width=25' : '<img src="' + item.Image + '" width=25 />',
                        CategoryName: item.ProductCategory.Name,
                        Price: formatNumber(item.Price, 0),
                        CreatedDate: sd.dateTimeFormatJson(item.DateCreated),
                        Status: sd.getStatus(item.Status)
                    });
                    $('#lblTotalRecords').text(res.RowCount);
                    if (render != '') {
                        $('#tbl-content').html(render);
                    };
                    wrapPaging(res.RowCount, function () {
                        loadData();
                    }, isPageChanged);
                });
            },
            error: function (status) {
                console.log(status);
                sd.notify('Cannot loading data', 'error');
            }
        });
    }

    function wrapPaging(recordCount, callBack, changePageSize) {
        var totalsize = Math.ceil(recordCount / sd.configs.pageSize);
        //Unbind pagination if it existed or click change pagesize
        if ($('#paginationUL a').length === 0 || changePageSize === true) {
            $('#paginationUL').empty();
            $('#paginationUL').removeData("twbs-pagination");
            $('#paginationUL').unbind("page");
        }
        //Bind Pagination Event
        $('#paginationUL').twbsPagination({
            totalPages: totalsize,
            visiblePages: 7,
            first: 'Đầu',
            prev: 'Trước',
            next: 'Tiếp',
            last: 'Cuối',
            onPageClick: function (event, p) {
                sd.configs.pageIndex = p;
                setTimeout(callBack(), 200);
            }
        });
    }
}