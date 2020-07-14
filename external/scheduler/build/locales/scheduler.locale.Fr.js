// prepare "namespace"
window.bryntum = window.bryntum || {};
window.bryntum.locales = window.bryntum.locales || {};

// put the locale under window.bryntum.locales to make sure it is discovered automatically
window.bryntum.locales.De = {

    localeName: "Fr",
    localeDesc: "Français",

    //region Columns

    TemplateColumn: {
        noTemplate: "TemplateColumn needs a template",
		noFunction: "TemplateColumn.template must be a function"
    },

    ColumnStore: {
        columnTypeNotFound: function(e) {
			return "Column type '".concat(e.type, "' not registered");
        }
    },

    //endregion

    //region Mixins

    InstancePlugin: {
        fnMissing: function(e) {
            return "Trying to chain fn " + e.plugIntoName + "#" + e.fnName + ", but plugin fn " + e.pluginName + "#" + e.fnName + " does not exist";
        },
        overrideFnMissing: function(e) {
            return "Trying to override fn " + e.plugIntoName + "#" + e.fnName + ", but plugin fn " + e.pluginName + "#" + e.fnName + " does not exist";
        }
    },

    //endregion

    //region Features

    ColumnPicker: {
        columnsMenu: "Columns",
		hideColumn: "Hide column",
		hideColumnShort: "Hide"
    },

    Filter: {
        applyFilter: "Apply filter",
		filter: "Filter",
		editFilter: "Edit filter",
		on: "On",
		before: "Before",
		after: "After",
		equals: "Equals",
		lessThan: "Less than",
		moreThan: "More than",
		removeFilter: "Remove filter"
    },

    FilterBar: {
        enableFilterBar: "Afficher barre des filtres",
        disableFilterBar: "Cacher barre des filtres"
    },

    Group: {
		groupAscending: "Group ascending",
		groupDescending: "Group descending",
		groupAscendingShort: "Ascending",
		groupDescendingShort: "Descending",
		stopGrouping: "Stop grouping",
		stopGroupingShort: "Stop"
    },

    Search: {
        searchForValue: "Search for value"
    },

    Sort: {
        sortAscending: "Sort ascending",
		sortDescending: "Sort descending",
		multiSort: "Multi sort",
		removeSorter: "Remove sorter",
		addSortAscending: "Add ascending sorter",
		addSortDescending: "Add descending sorter",
		toggleSortAscending: "Change to ascending",
		toggleSortDescending: "Change to descending",
		sortAscendingShort: "Ascending",
		sortDescendingShort: "Descending",
		removeSorterShort: "Remove",
		addSortAscendingShort: "+ Ascending",
		addSortDescendingShort: "+ Descending"
    },

    Tree: {
        noTreeColumn: "To use the tree feature one column must be configured with tree: true"
    },

    //endregion

    //region Grid

    Grid: {
        featureNotFound: function(e) {
            return "Feature '".concat(e, "' not available, make sure you have imported it");
        },
        invalidFeatureNameFormat: function(e) {
            return "Invalid feature name '".concat(e, "', must start with a lowercase letter");
        },
        removeRow: "Delete row",
		removeRows: "Delete rows",
		loadMask: "Loading...",
		loadFailedMessage: "Data loading failed.",
		moveColumnLeft: "Move to left section",
		moveColumnRight: "Move to right section",
		noRows: "No rows to display"
    },

    //endregion

    //region Widgets

    Field: {
        invalidValue: "Invalid field value",
		minimumValueViolation: "Minimum value violation",
		maximumValueViolation: "Maximum value violation",
		fieldRequired: "This field is required",
		validateFilter: "Value must be selected from the list"
    },

    DateField: {
        invalidDate: "Invalid date input"
    },

    TimeField: {
        invalidTime: "Invalid time input"
    },

    //endregion

    //region Others

    DateHelper: {
        locale: "fr-FR",
        shortWeek: "S",
        shortQuarter: "q",
        week: "Semaine",
        weekStartDay: 1,
        unitNames: [
            { single: "Milliseconde", plural: "Millisecondes", abbrev: "ms" },
            { single: "Seconde", plural: "Secondes", abbrev: "s" },
            { single: "Minute", plural: "Minutes", abbrev: "min" },
            { single: "Heure", plural: "Heures", abbrev: "h" },
            { single: "Jour", plural: "Jours", abbrev: "j" },
            { single: "Semaine", plural: "Semaines", abbrev: "s" },
            { single: "Mois", plural: "Mois", abbrev: "mois" },
            { single: "Trimestre", plural : "Trimestres", abbrev: "t" },
            { single: "Année", plural: "Années", abbrev: "a" }
        ],
        // Used to build a RegExp for parsing time units.
        // The full names from above are added into the generated Regexp.
        // So you may type "2 w" or "2 wk" or "2 week" or "2 weeks" into a DurationField.
        // When generating its display value though, it uses the full localized names above.
        unitAbbreviations: [
            ["mil"],
            ["s", "sec"],
            ["m", "min"],
            ["h", "hr"],
            ["d"],
            ["w", "wk"],
            ["mo", "mon", "mnt"],
            ["q", "quar", "qrt"],
            ["y", "yr"]
        ],
        parsers: {
            "L": "DD/MM/YYYY",
            "LT": "HH:mm"
        },
        ordinalSuffix: function(number) {
            return number;
        }
    },

    BooleanCombo: {
        Yes: "Yes",
		No: "No"
    },

    //endregion

    //region Scheduler

    ExcelExporter: {
        "No resource assigned": "No resource assigned"
    },

    ResourceInfoColumn: {
        eventCountText: function(e) {
            return e + " event" + (1 !== e ? "s" : "");
        }
    },

    Dependencies: {
        from: "From",
		to: "To",
		valid: "Valid",
		invalid: "Invalid",
		Checking: "Checking…"
    },

    DependencyEdit: {
		From: "From",
		To: "To",
		Type: "Type",
		Lag: "Lag",
		"Edit dependency": "Edit dependency",
		Save: "Save",
		Delete: "Delete",
		Cancel: "Cancel",
		StartToStart: "Start to Start",
		StartToEnd: "Start to End",
		EndToStart: "End to Start",
		EndToEnd: "End to End"
    },

    EventEdit: {
		Name: "Name",
		Resource: "Resource",
		Start: "Start",
		End: "End",
		Save: "Save",
		Delete: "Delete",
		Cancel: "Cancel",
		"Edit Event": "Edit event"
    },

    Scheduler: {
        "Add event": "Add event",
		"Delete event": "Delete event",
		"Unassign event": "Unassign event"
    },

    HeaderContextMenu: {
        pickZoomLevel: "Zoom",
		activeDateRange: "Date range",
		startText: "Start date",
		endText: "End date",
		todayText: "Today"
    },

    EventFilter: {
        filterEvents: "Filter tasks",
		byName: "By name"
    },

    TimeRanges: {
        showCurrentTimeLine: "Show current timeline"
    },

    PresetManager: {
        minuteAndHour: {
            topDateFormat: "ddd DD.MM, HH:mm"
        },
        hourAndDay: {
            topDateFormat: "ddd DD.MM"
        },
        weekAndDay: {
            displayDateFormat: "HH:mm"
        }
    },

    //endregion
};
