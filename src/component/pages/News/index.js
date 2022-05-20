import React from 'react';
import FlashSale from './FlashSale';
import SectionDishes from './SectionDishes';
import SectionFeedback from './SectionFeedback';
import SectionIntro from './SectionIntro';
import SectionNew from './SectionNew';
import SectionRation from './SectionRation';

export default function NewPage() {
	return (
		<>
			<SectionIntro />
			<FlashSale />
			<SectionRation />
			<SectionDishes />
			<SectionFeedback />
			<SectionNew />
		</>
	);
}
