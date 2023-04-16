const newRealty = {
	locale: 'en',
	new_title: 'Doom.ru - New realty | Database of real estate',
	new_header: {
		title: 'New realty'
	},
	new_form: {
		images: {
			title: 'Upload images (up to 10 pieces)',
			uploadBoxTitle: 'upload image',
			errors: {
				empty: {
					title: "Images can't be empty"
				}
			}
		},
		form: {
			base: {
				title: 'Specify base realty information',
				fields: [
					{
						name: 'title',
						page: 'both',
						type: 'text',
						required: {
							value: true,
							message: 'Title is required'
						},
						title: 'Title',
						label: 'Input title'
					},
					{
						name: 'address',
						page: 'both',
						type: 'text',
						required: {
							value: true,
							message: 'Address is required'
						},
						title: 'Address',
						label: 'City, district or subway'
					},
					{
						name: 'action',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Rent or sale'
						},
						title: 'Action',
						label: 'Select action',
						options: [
							{
								value: '',
								title: 'Choose action'
							},
							{
								value: 'rent',
								title: 'Rent'
							},
							{
								value: 'buy',
								title: 'Sale'
							}
						]
					},
					{
						name: 'price',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Price is required'
						},
						title: 'Price',
						label: 'Input price'
					},
					{
						name: 'description',
						page: 'both',
						type: 'textarea',
						required: {
							value: true,
							message: 'Description is required'
						},
						title: 'Description',
						label: 'Input description'
					}
				]
			},
			detail: {
				title: 'Specify other information',
				fields: [
					{
						name: 'area',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Area is required'
						},
						title: 'Area',
						label: 'Input area'
					},
					{
						name: 'floor',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Floor is required'
						},
						title: 'Floor',
						label: 'Input floor'
					},
					{
						name: 'rooms',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Rooms is required'
						},
						title: 'Rooms',
						label: 'Input rooms'
					},
					{
						name: 'bedrooms',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Bedrooms is required'
						},
						title: 'Beds',
						label: 'Input beds'
					},
					{
						name: 'currency',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Ruble or dollar'
						},
						title: 'Currency',
						label: 'Select currency',
						options: [
							{
								value: '',
								title: 'Choose currency'
							},
							{
								value: 'RUB',
								title: 'Ruble'
							},
							{
								value: 'USD',
								title: 'Dollar'
							}
						]
					},
					{
						name: 'type',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Type is required'
						},
						title: 'Type',
						label: 'Select type',
						options: [
							{
								value: '',
								title: 'Choose type'
							},
							{
								value: 'apartment',
								title: 'Apartment'
							},
							{
								value: 'room',
								title: 'Room'
							},
							{
								value: 'house',
								title: 'House'
							},
							{
								value: 'cottage',
								title: 'Cottage'
							},
							{
								value: 'studio',
								title: 'Studio'
							},
							{
								value: 'hostel',
								title: 'Hostel'
							}
						]
					},
					{
						name: 'term',
						page: 'rent',
						type: 'option',
						required: {
							value: true,
							message: 'Term is required'
						},
						title: 'Term',
						label: 'Select term',
						options: [
							{
								value: '',
								title: 'Choose term'
							},
							{
								value: 'day',
								title: 'Day'
							},
							{
								value: 'month',
								title: 'Month'
							}
						]
					},
					{
						name: 'houseType',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'House type is required'
						},
						title: 'House type',
						label: 'Select house type',
						options: [
							{
								value: '',
								title: 'Select house type'
							},
							{
								value: 'panel',
								title: 'Panel'
							},
							{
								value: 'brick',
								title: 'Brick'
							},
							{
								value: 'monolith',
								title: 'Monolith'
							},
							{
								value: 'wood',
								title: 'Wood'
							},
							{
								value: 'other',
								title: 'Other'
							}
						]
					},
					{
						name: 'repair',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Repair is required'
						},
						title: 'Repair',
						label: 'Select repair',
						options: [
							{
								value: '',
								title: 'Select repair'
							},
							{
								value: 'euro',
								title: 'Euro'
							},
							{
								value: 'design',
								title: 'Design'
							},
							{
								value: 'cosmetic',
								title: 'Cosmetic'
							},
							{
								value: 'without',
								title: 'Without'
							}
						]
					},
					{
						name: 'elevator',
						page: 'both',
						type: 'checkbox',
						title: 'Elevator',
						label: 'Is there an elevator or not'
					},
					{
						name: 'mortgage',
						page: 'buy',
						type: 'checkbox',
						title: 'Into a mortgage',
						label: 'With mortgage or not'
					}
				]
			},
			submit: {
				title: 'Create',
				label: 'Click to create'
			},
			confirm: {
				title: 'Are you sure?',
				label: 'If you click "Create" button, your realty will be created. Click "Cancel" to return to the form.',
				cancel: {
					title: 'Cancel',
					label: 'Click to cancel'
				},
				submit: {
					title: 'Create',
					label: 'Click to create'
				}
			}
		},
		errors: {
			unknown: {
				title: 'Something went wrong. Try again later'
			}
		}
	}
};

export default newRealty;
