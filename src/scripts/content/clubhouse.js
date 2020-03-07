'use strict';

togglbutton.render('.story-state:not(.toggl)', { observe: true }, function (
  elem
) {
  const wrap = createTag('div');
  const element = elem;
  elem = elem.parentNode.parentNode.parentNode;

  const getDescription = function () {
    return 'ch' + document.getElementsByClassName('clipboard')[1].value + ' ' + $('h2.story-name', elem).textContent;
  };
  // comment
  const getProject = function () {
    return $('.story-project .value', elem).textContent;
  };

  const link = togglbutton.createTimerLink({
    className: 'clubhouse',
    description: getDescription,
    projectName: getProject
  });

  wrap.className = 'attribute editable-attribute';
  wrap.appendChild(link);

  element.parentNode.insertBefore(wrap, element.nextSibling);
});
