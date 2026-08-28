const addJournalLink = () => {
  const links = document.querySelector(".nav-links");
  if (!links || links.querySelector('[href="/journal/"]')) return Boolean(links);

  const journalLink = document.createElement("a");
  journalLink.href = "/journal/";
  journalLink.textContent = "Journal";
  links.insertBefore(journalLink, links.lastElementChild);
  return true;
};

if (!addJournalLink()) {
  const observer = new MutationObserver(() => {
    if (addJournalLink()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
