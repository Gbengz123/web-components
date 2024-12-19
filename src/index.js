import './style.css';

function createDropdown() {
  // Create the dropdown div
  const dropdown = document.createElement('div');
  dropdown.id = 'dropdown';

  // Create the SVG icon (dropdown icon)
  const dropDownIcon = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg',
  );
  dropDownIcon.id = 'dropdown-icon';
  dropDownIcon.setAttribute('width', '50px');
  dropDownIcon.setAttribute('height', '50px');
  dropDownIcon.setAttribute('viewBox', '-2.4 -2.4 28.80 28.80');
  dropDownIcon.setAttribute('fill', '#000000');

  // Set the inner SVG content (3 dots icon)
  dropDownIcon.innerHTML = `
    <g id="SVGRepo_bgCarrier" stroke-width="0">
      <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#dedede" />
    </g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g id="_20x20_three-dots--grey" data-name="20x20/three-dots--grey" transform="translate(24) rotate(90)">
        <rect id="Rectangle" width="24" height="24" fill="none"></rect>
        <circle id="Oval" cx="1" cy="1" r="1" transform="translate(5 11)" stroke="#3d3d3d" stroke-miterlimit="10" stroke-width="0.5"></circle>
        <circle id="Oval-2" cx="1" cy="1" r="1" transform="translate(11 11)" stroke="#3d3d3d" stroke-miterlimit="10" stroke-width="0.5"></circle>
        <circle id="Oval-3" cx="1" cy="1" r="1" transform="translate(17 11)" stroke="#3d3d3d" stroke-miterlimit="10" stroke-width="0.5"></circle>
      </g>
    </g>
  `;

  // Create the dropdown menu div
  const dropdownMenu = document.createElement('div');
  dropdownMenu.id = 'dropdown-menu';
  dropdownMenu.classList.add('dropdown-menu');

  // Add options to the dropdown
  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ];
  options.forEach((option) => {
    const item = document.createElement('div');
    item.classList.add('dropdown-items');
    item.textContent = option;
    dropdownMenu.appendChild(item);
  });

  // Create the dropdown container
  const dropdownContainer = document.createElement('div');
  dropdownContainer.classList.add('dropdown-container');
  dropdownContainer.appendChild(dropdownMenu);

  // Append the icon and container to the dropdown div
  dropdown.appendChild(dropDownIcon);
  dropdown.appendChild(dropdownContainer);

  dropDownIcon.addEventListener('click', () => {
    if (dropdownContainer.style.display === 'none') {
      dropdownContainer.style.display = 'block';
    } else {
      dropdownContainer.style.display = 'none';
    }
  });

  return dropdown;
}

export default createDropdown;
