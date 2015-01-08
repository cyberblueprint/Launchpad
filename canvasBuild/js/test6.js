// From toolbar9 exercise and edited

var ToolbarItem = function (itemElement) {
    this.__el = itemElement;

    itemElement.addEventListener('click', this.toggleActiveState.bind(this));
};

Object.defineProperties(ToolbarItem.prototype, {
    enabled: {
        get: function () {
            return !this.__el.classList.contains("disabled");
        },
        set: function (value) {
            if (value) {
                this.__el.classList.remove("disabled");
            } else {
                this.__el.classList.add("disabled");
            }
        }
    },
    activated: {
        get: function () {
            return this.__el.classList.contains("active");
        },
        set: function (value) {
            if (value) {
                this.__el.classList.add("active");
            } else {
                this.__el.classList.remove("active");
            }
        }
    }

});

ToolbarItem.prototype.toggleActiveState = function () {
    this.activated = !this.activated;
},

var createToolbarItems = function (itemElements) {
    var items = [];

    [].forEach.call(itemElements, function (el, index, array) {
        var item = new ToolbarItem(el);

        items.push(item);
    });

    return items;
};

var Toolbar = function (toolbarElement) {
    var items = toolbarElement.querySelectorAll(".toolbar-item");

    Object.defineProperties(this, {
        __el: {
            value: toolbarElement
        },
        items: {
            value: createToolbarItems(items),
            enumerable: true
        }
    });
};

Object.defineProperties(Toolbar.prototype, {
    add: {
        value: function (options) {
            var span = document.createElement("SPAN");
            span.className = "toolbar-item";

            this.__el.appendChild(span);

            var item = new ToolbarItem(span);

            this.items.push(item);
        },
        enumerable : true
    },
    remove: {
        value: function (index) {
            var len = this.items.length;

            if (index > len || index < 0) {
                throw new Error("Index is out of range");
            }

            var item = this.items[index];
            this.items.splice(index, 1);

            this.__el.removeChild(item.__el);

            item = null;
        },
        enumerable : true
    },
    appendTo: {
        value: function (parentElement) {
            parentElement.appendChild(this.__el);
        },
        enumerable: true
    }
});

oojs.createToolbar = function (elementId) {
    var element = document.getElementById(elementId);

    if (!element) {
        element = document.createElement("DIV");
        element.id = elementId;
        element.className = "toolbar";
    }

    return new Toolbar(element);
};