var productCategoryController = function () {
    this.initialize = function () {
        loadData();
    }
    function loadData() {
        $.ajax({
            url: "/Admin/ProductCategory/GetAll",
            dataType: "json",
            success: function (res) {
                var data = [];
                $.each(res, function (i, item) {
                    data.push({
                        id: item.Id,
                        text: item.Name,
                        parentId: item.ParentId,
                        sortOrder: item.SortOrder,
                    });

                });
                var treeArr = sd.unflattern(data);

                //var $tree = $('#treeProductCategory');

                $('#treeProductCategory').tree({
                    data: treeArr,
                    dnd: true
                })
            },
            error: function (status) {
                console.log(status);
                sd.notify('Cannot loading data', 'error');
            }
        })
    }
}