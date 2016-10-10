module.exports = (data) => {
  let actor = data.sender;
  let pages = data.pages;
  let actions = pages.map(e => {
    let action = e.action == 'edited' ? 'Edited' : 'Created';
    return `${action} **${e.title}** (<${e.html_url}>)`;
  }).join('\n          ')

  let msg = `📰 **${actor.login}** modified the wiki\n          ${actions}`;

  return msg;
}