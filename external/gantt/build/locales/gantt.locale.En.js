/*

Bryntum Gantt 1.1.5
Copyright(c) 2019 Bryntum AB
https://bryntum.com/contact
https://bryntum.com/license

*/
!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('En', [], t)
    : 'object' == typeof exports
    ? (exports.En = t())
    : ((e.bryntum = e.bryntum || {}), (e.bryntum.locales = e.bryntum.locales || {}), (e.bryntum.locales.En = t()));
})(window, function() {
  return (function(e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var r in e)
            n.d(
              o,
              r,
              function(t) {
                return e[t];
              }.bind(null, r)
            );
        return o;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 6))
    );
  })({
    6: function(e, t, n) {
      'use strict';
      n.r(t);
      var o = {
          localeName: 'En',
          localeDesc: 'English',
          TemplateColumn: {
            noTemplate: 'TemplateColumn needs a template',
            noFunction: 'TemplateColumn.template must be a function'
          },
          ColumnStore: {
            columnTypeNotFound: function(e) {
              return "Column type '".concat(e.type, "' not registered");
            }
          },
          InstancePlugin: {
            fnMissing: function(e) {
              return 'Trying to chain fn '
                .concat(e.plugIntoName, '#')
                .concat(e.fnName, ', but plugin fn ')
                .concat(e.pluginName, '#')
                .concat(e.fnName, ' does not exist');
            },
            overrideFnMissing: function(e) {
              return 'Trying to override fn '
                .concat(e.plugIntoName, '#')
                .concat(e.fnName, ', but plugin fn ')
                .concat(e.pluginName, '#')
                .concat(e.fnName, ' does not exist');
            }
          },
          ColumnPicker: { columnsMenu: 'Columns', hideColumn: 'Hide column', hideColumnShort: 'Hide' },
          Filter: {
            applyFilter: 'Apply filter',
            filter: 'Filter',
            editFilter: 'Edit filter',
            on: 'On',
            before: 'Before',
            after: 'After',
            equals: 'Equals',
            lessThan: 'Less than',
            moreThan: 'More than',
            removeFilter: 'Remove filter'
          },
          FilterBar: { enableFilterBar: 'Show filter bar', disableFilterBar: 'Hide filter bar' },
          Group: {
            groupAscending: 'Group ascending',
            groupDescending: 'Group descending',
            groupAscendingShort: 'Ascending',
            groupDescendingShort: 'Descending',
            stopGrouping: 'Stop grouping',
            stopGroupingShort: 'Stop'
          },
          Search: { searchForValue: 'Search for value' },
          Sort: {
            sortAscending: 'Sort ascending',
            sortDescending: 'Sort descending',
            multiSort: 'Multi sort',
            removeSorter: 'Remove sorter',
            addSortAscending: 'Add ascending sorter',
            addSortDescending: 'Add descending sorter',
            toggleSortAscending: 'Change to ascending',
            toggleSortDescending: 'Change to descending',
            sortAscendingShort: 'Ascending',
            sortDescendingShort: 'Descending',
            removeSorterShort: 'Remove',
            addSortAscendingShort: '+ Ascending',
            addSortDescendingShort: '+ Descending'
          },
          Tree: { noTreeColumn: 'To use the tree feature one column must be configured with tree: true' },
          Grid: {
            featureNotFound: function(e) {
              return "Feature '".concat(e, "' not available, make sure you have imported it");
            },
            invalidFeatureNameFormat: function(e) {
              return "Invalid feature name '".concat(e, "', must start with a lowercase letter");
            },
            removeRow: 'Delete row',
            removeRows: 'Delete rows',
            loadMask: 'Loading...',
            loadFailedMessage: 'Data loading failed.',
            moveColumnLeft: 'Move to left section',
            moveColumnRight: 'Move to right section',
            noRows: 'No rows to display'
          },
          Field: {
            invalidValue: 'Invalid field value',
            minimumValueViolation: 'Minimum value violation',
            maximumValueViolation: 'Maximum value violation',
            fieldRequired: 'This field is required',
            validateFilter: 'Value must be selected from the list'
          },
          DateField: { invalidDate: 'Invalid date input' },
          TimeField: { invalidTime: 'Invalid time input' },
          DateHelper: {
            locale: 'en-US',
            shortWeek: 'W',
            shortQuarter: 'q',
            week: 'Week',
            weekStartDay: 0,
            unitNames: [
              { single: 'millisecond', plural: 'ms', abbrev: 'ms' },
              { single: 'second', plural: 'seconds', abbrev: 's' },
              { single: 'minute', plural: 'minutes', abbrev: 'min' },
              { single: 'hour', plural: 'hours', abbrev: 'h' },
              { single: 'day', plural: 'days', abbrev: 'd' },
              { single: 'week', plural: 'weeks', abbrev: 'w' },
              { single: 'month', plural: 'months', abbrev: 'mon' },
              { single: 'quarter', plural: 'quarters', abbrev: 'q' },
              { single: 'year', plural: 'years', abbrev: 'yr' }
            ],
            unitAbbreviations: [
              ['mil'],
              ['s', 'sec'],
              ['m', 'min'],
              ['h', 'hr'],
              ['d'],
              ['w', 'wk'],
              ['mo', 'mon', 'mnt'],
              ['q', 'quar', 'qrt'],
              ['y', 'yr']
            ],
            parsers: { L: 'MM/DD/YYYY', LT: 'HH:mm A' },
            ordinalSuffix: function(e) {
              return e + ({ 1: 'st', 2: 'nd', 3: 'rd' }[e[e.length - 1]] || 'th');
            }
          },
          BooleanCombo: { Yes: 'Yes', No: 'No' }
        },
        r = {
          ExcelExporter: { 'No resource assigned': 'No resource assigned' },
          ResourceInfoColumn: {
            eventCountText: function(e) {
              return e + ' event' + (1 !== e ? 's' : '');
            }
          },
          Dependencies: { from: 'From', to: 'To', valid: 'Valid', invalid: 'Invalid', Checking: 'Checking…' },
          DependencyEdit: {
            From: 'From',
            To: 'To',
            Type: 'Type',
            Lag: 'Lag',
            'Edit dependency': 'Edit dependency',
            Save: 'Save',
            Delete: 'Delete',
            Cancel: 'Cancel',
            StartToStart: 'Start to Start',
            StartToEnd: 'Start to End',
            EndToStart: 'End to Start',
            EndToEnd: 'End to End'
          },
          EventEdit: {
            Name: 'Name',
            Resource: 'Resource',
            Start: 'Start',
            End: 'End',
            Save: 'Save',
            Delete: 'Delete',
            Cancel: 'Cancel',
            'Edit Event': 'Edit event'
          },
          Scheduler: { 'Add event': 'Add event', 'Delete event': 'Delete event', 'Unassign event': 'Unassign event' },
          HeaderContextMenu: {
            pickZoomLevel: 'Zoom',
            activeDateRange: 'Date range',
            startText: 'Start date',
            endText: 'End date',
            todayText: 'Today'
          },
          EventFilter: { filterEvents: 'Filter tasks', byName: 'By name' },
          TimeRanges: { showCurrentTimeLine: 'Show current timeline' },
          PresetManager: {
            minuteAndHour: { topDateFormat: 'ddd MM/DD, hA' },
            hourAndDay: { topDateFormat: 'ddd MM/DD' },
            weekAndDay: { displayDateFormat: 'hh:mm A' }
          }
        };
      for (var a in o) r[a] = o[a];
      var i = r,
        l = {
          AddNewColumn: { 'New Column': 'New Column' },
          CalendarColumn: { Calendar: 'Calendar' },
          EarlyStartDateColumn: { 'Early Start': 'Early Start' },
          EarlyEndDateColumn: { 'Early End': 'Early End' },
          LateStartDateColumn: { 'Late Start': 'Late Start' },
          LateEndDateColumn: { 'Late End': 'Late End' },
          TotalSlackColumn: { 'Total Slack': 'Total Slack' },
          ConstraintDateColumn: { 'Constraint Date': 'Constraint Date' },
          ConstraintTypeColumn: { 'Constraint Type': 'Constraint Type' },
          DependencyColumn: {
            'Invalid dependency found, change is reverted': 'Invalid dependency found, change is reverted'
          },
          DurationColumn: { Duration: 'Duration' },
          EffortColumn: { Effort: 'Effort' },
          EndDateColumn: { Finish: 'Finish' },
          EventModeColumn: { 'Event mode': 'Event mode', Manual: 'Manual', Auto: 'Auto' },
          ManuallyScheduledColumn: { 'Manually scheduled': 'Manually scheduled' },
          MilestoneColumn: { Milestone: 'Milestone' },
          NameColumn: { Name: 'Name' },
          NoteColumn: { Note: 'Note' },
          PercentDoneColumn: { '% Done': '% Done' },
          PredecessorColumn: { Predecessors: 'Predecessors' },
          ResourceAssignmentColumn: { 'Assigned Resources': 'Assigned Resources' },
          SchedulingModeColumn: { 'Scheduling Mode': 'Scheduling Mode' },
          SequenceColumn: { Sequence: 'Sequence' },
          ShowInTimelineColumn: { 'Show in timeline': 'Show in timeline' },
          StartDateColumn: { Start: 'Start' },
          SuccessorColumn: { Successors: 'Successors' },
          WBSColumn: { WBS: 'WBS' },
          ProjectLines: { 'Project Start': 'Project start', 'Project End': 'Project end' },
          TaskTooltip: { Start: 'Start', End: 'End', Duration: 'Duration', Complete: 'Complete' },
          AssignmentGrid: {
            Name: 'Resource name',
            Units: 'Units',
            '%': '%',
            unitsTpl: function(e) {
              var t = e.value;
              return t ? t + '%' : '';
            }
          },
          AssignmentPicker: { Save: 'Save', Cancel: 'Cancel' },
          AssignmentEditGrid: { Name: 'Resource name', Units: 'Units' },
          ConstraintTypePicker: {
            'Must start on': 'Must start on',
            'Must finish on': 'Must finish on',
            'Start no earlier than': 'Start no earlier than',
            'Start no later than': 'Start no later than',
            'Finish no earlier than': 'Finish no earlier than',
            'Finish no later than': 'Finish no later than'
          },
          Gantt: {
            Add: 'Add...',
            'New Task': 'New task',
            'Task above': 'Task above',
            'Task below': 'Task below',
            'Delete task': 'Delete task',
            Milestone: 'Milestone',
            'Sub-task': 'Subtask',
            Successor: 'Successor',
            Predecessor: 'Predecessor'
          },
          GanttCommon: {
            SS: 'SS',
            SF: 'SF',
            FS: 'FS',
            FF: 'FF',
            StartToStart: 'Start-to-Start',
            StartToEnd: 'Start-to-End',
            EndToStart: 'End-to-Start',
            EndToEnd: 'End-to-End',
            dependencyTypes: ['SS', 'SF', 'FS', 'FF'],
            dependencyTypesLong: ['Start-to-Start', 'Start-to-End', 'End-to-Start', 'End-to-End']
          },
          TaskEdit: { Edit: 'Edit' },
          TaskEditor: {
            editorWidth: '45em',
            Information: 'Information',
            Save: 'Save',
            Cancel: 'Cancel',
            Delete: 'Delete'
          },
          GeneralTab: {
            labelWidth: '6.5em',
            General: 'General',
            Name: 'Name',
            '% complete': '% complete',
            Duration: 'Duration',
            Start: 'Start',
            Finish: 'Finish',
            Effort: 'Effort',
            Dates: 'Dates'
          },
          AdvancedTab: {
            labelWidth: '11.5em',
            Advanced: 'Advanced',
            Calendar: 'Calendar',
            'Scheduling mode': 'Scheduling mode',
            'Effort driven': 'Effort driven',
            'Manually scheduled': 'Manually scheduled',
            'Constraint type': 'Constraint type',
            'Constraint date': 'Constraint date',
            Constraint: 'Constraint'
          },
          DependencyTab: {
            Predecessors: 'Predecessors',
            Successors: 'Successors',
            ID: 'ID',
            Name: 'Name',
            Type: 'Type',
            Lag: 'Lag',
            'Cyclic dependency has been detected': 'Cyclic dependency has been detected'
          },
          ResourcesTab: {
            unitsTpl: function(e) {
              var t = e.value;
              return ''.concat(t, '%');
            },
            Resources: 'Resources',
            Resource: 'Resource',
            Units: 'Units'
          },
          NotesTab: { Notes: 'Notes' },
          SchedulingModePicker: {
            Normal: 'Normal',
            'Fixed Duration': 'Fixed Duration',
            'Fixed Units': 'Fixed Units',
            'Fixed Effort': 'Fixed Effort'
          }
        };
      for (var s in i) l[s] = i[s];
      t.default = l;
    }
  }).default;
});
