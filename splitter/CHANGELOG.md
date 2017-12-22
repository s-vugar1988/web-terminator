# jQuery Enhanced Splitter Change Log

## Release v1.2.3

- Bug fix for zero panel height issue.
- Add 'dots' handle style.
- Add 'lotsofdots' handle style.
- Update documentation and test files.

## Release v1.2.2

- Fix min/max size options.

## Release v1.2.1

- Considerable internal refactoring.
- Add options 'leftMinSize', 'leftMaxSize', 'rightMinSize', 'rightMaxSize'.
- Add aliases 'topMinSize', 'topMaxSize', 'bottomMinSize', 'bottomMaxSize', which refer to the new options above respectively.
- Add aliases 'minSize' and 'maxSize' to refer to each similarly named pair of options above.
- Remove options 'lowerLimit' and 'upperLimit', and alias 'limit'. Use 'leftMinSize', 'rightMinSize', and 'minSize' instead.
- Add command interface.
- Update documentation.


## Release v1.2.0

A few bug fixes and minor enhancements, with small breaking changes signifying the minor version increment.
- Updated composer.json to specify valid jQuery versions (1.8+ / 2.0+).
- Implemented drag-delay if the user clicks on the collapse handle then starts dragging. Drag will not begin until mouse has moved past 5 pixels in either direction. (UX improvement)
- Prevent click event if the user started and ended their drag on the collapse handle. (UX improvement)
- Change splitter bar class from .splitter to .splitter_bar for consistency.
- Fixed issue where collapse handle would ignore one click if manually dragged to the collapsed position. (UX improvement/bug)
- Modified onDrag, onDragStart, onDragEnd events to pass splitter container for easy manipulation.

## Release v1.1.0

This release adds a number of new options, as well as a few fixes and overall UX improvements.
- Added 'lowerLimit' and 'upperLimit' options, changed 'limit' to an alias to set both.
- Added 'collapse' option.
- Added 'fixed' option.
- Added 'splitterSize' option.
- Changed 'orientation' string setting to 'vertical' boolean setting. (BREAKING CHANGE)
- Fixed a few bugs.
- Significantly rewrote event handling, now smoother, faster, and tastier.

## Release v1.0.1

More bug fixes, improved event handlers, improved CSS.

## Release v1.0.0

Original release of fork, with significant changes and bug fixes.
