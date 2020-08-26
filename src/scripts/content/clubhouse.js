'use strict';

togglbutton.render('.story-state:not(.toggl)', { observe: true }, function (
  elem
) {
  const wrap = createTag('div');
  const element = elem;
  elem = elem.parentNode.parentNode.parentNode;

  const getDescription = function () {
    // very limited, will easily break, don't even try to do anything fancy here
    // you need to find the story number in one statement

    return 'ch' + document.querySelectorAll('[id*=story-id]')[0].value + ' ' + $('h2.story-name', elem).textContent;
  };

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
