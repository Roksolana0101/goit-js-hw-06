const links = {
	listMainRef: document.querySelector('#categories'),
	listsInnerRef: document.querySelectorAll('.item'),
};

const resultLinks = {
	listMainLength: links.listMainRef.children.length,
	listInnerFirstTitle: links.listsInnerRef[0].firstElementChild.textContent,
	listInnerSecondTitle: links.listsInnerRef[1].firstElementChild.textContent,
	listInnerThirdTitle: links.listsInnerRef[2].firstElementChild.textContent,
	listInnerFirstLength:
		links.listsInnerRef[0].lastElementChild.children.length,
	listInnerSecondLength:
		links.listsInnerRef[1].lastElementChild.children.length,
	listInnerThirdLength:
		links.listsInnerRef[2].lastElementChild.children.length,
};

const clMessage = `Number of categories: ${resultLinks.listMainLength}

Category: ${resultLinks.listInnerFirstTitle}
Elements: ${resultLinks.listInnerFirstLength}

Category: ${resultLinks.listInnerSecondTitle}
Elements: ${resultLinks.listInnerSecondLength}

Category: ${resultLinks.listInnerThirdTitle}
Elements: ${resultLinks.listInnerThirdLength}
`;

console.log(clMessage);