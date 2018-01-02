var CONSTANTS = {
    ATTR_WT_FRAME_WRAPPER: 'wt-frame-wrapper',
    ATTR_WT_CONTAINER: 'wt-container',
    ATTR_SPLIT: 'split',
    ATTR_SPLIT_VALUE_VERTICAL: 'vertical',
    ATTR_SPLIT_VALUE_HORIZONTAL: 'horizontal',
    UTIL_WT_PREFIX: 'wt-',
    UTIL_FRAME_WRAPPER_HTML : '<div wt-frame-wrapper wt-container="#${id}" class="wt-frame-wrapper">' +
        '<i split="horizontal" class="split material-icons">more_horiz</i>' +
        '<i split="vertical" class="split material-icons">more_vert</i>' +
        '<iframe class="wt-frame" src="chrome-extension://pnhechapfaindjhompbnflcldabbghjo/html/nassh.html"></iframe>' +
    '</div>',
    UTIL_FRAME_WRAPPER_REPLACE : '${id}'
};

function normalizeFramePositions() {
    console.log('inside normalizeFramePositions');
    $("[wt-frame-wrapper]").each(function (index, element) {
        console.log(index);
        console.log(element);
        var container_selector = $(element).attr('wt-container');
        console.log(container_selector);
        var container_obj = $(container_selector);

        console.log("container_obj.height() = " + container_obj.height());
        console.log("container_obj.width() = " + container_obj.width());

        element.style.height = container_obj.height() + 'px';
        element.style.width = container_obj.width()+ 'px';
        element.style.top = container_obj.offset().top + 'px';
        element.style.left = container_obj.offset().left + 'px';
    });
}


function split_in_2_part(element, direction) {
    //var  = element.attr(CONSTANTS.ATTR_SPLIT);

    //console.log(direction);

    element.enhsplitter({
        vertical: (direction == CONSTANTS.ATTR_SPLIT_VALUE_VERTICAL),
        'onDragEnd':function (event, splitter_container) {
            normalizeFramePositions();
        }
    });
}