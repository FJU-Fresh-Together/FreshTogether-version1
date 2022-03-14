$(function () {
  $(".checkAll").click(function () {
    var isCheck = $(this).prop("checked");
    $(this)
      .closest(".checkAllWrap")
      .find("input[name='sort']")
      .prop("checked", isCheck);
  });

  $(".checkAllWrap input[name='sort']").click(function () {
    var el_checkAll = $(this).closest(".checkAllWrap").find(".checkAll");

    var checkLength = $(this)
      .closest(".checkAllWrap")
      .find("input[name='sort']:checked").length; // 每區塊目前被V的有幾個

    var inputLength = $(this)
      .closest(".checkAllWrap")
      .find("input[name='sort']").length; // 每區塊的核取框有多少

    if (!$(this).prop("checked")) {
      el_checkAll.prop("checked", false);
    } else {
      if (checkLength == inputLength) {
        el_checkAll.prop("checked", true);
      }
    }
  });
});