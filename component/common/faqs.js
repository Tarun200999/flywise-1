import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Center
} from '@chakra-ui/react';
import React, { useState } from 'react';

function FaqList({ faqs }) {
	const [ faqState, setFaqState ] = useState(faqs ? faqs : [ { ques: '', ans: '' } ]);

	return (
		<Center>
			<Accordion marginLeft="10px" marginRight="10px" allowToggle>
				{faqState.map((faq, idx) => (
					<Center key={idx}>
						<AccordionItem
							mx="2"
							
							width="100%"
							border="1px solid #d6d6d6"
							rounded="lg"
							bg="#F6F7F8"
							my="4"
						>
							<AccordionButton
								_focus={{ boxShadow: 'none' }}
								rounded="lg"
								bg="#F6F7F8"
								_hover={{ bg: '#F6F7F8' }}
							>
								<AccordionIcon w={8} h={8} color="#23BAFB" />{' '}
								{/* <Image mt="1" alt="arrow" src="/images/right_arrow.png" maxH="1rem" /> */}
								<Box w={{ base: '16rem', md: '55rem' }} flex="1" textAlign="left" fontWeight="bold" >
									{faq.ques ? faq.ques : ''}
								</Box>
							</AccordionButton>

							<AccordionPanel maxW={{ base: '16rem', md: '55rem' }} pb={4} ml={{base:"30px"}}>
								{faq.ans ? faq.ans.map((line, idx) => <p key={idx}> {line}</p>) : ''}
							</AccordionPanel>
						</AccordionItem>
					</Center>
				))}
			</Accordion>

			{/* <Flex
				mx="2"
				w={[ '80%', '30rem', '30rem', '35rem', '40rem' ]}
				rounded="xl"
				my="4"
				p="4"
				bg="rgba(246, 247, 248, 1)"
			>
				<Image mt="1" alt="arrow" src="/images/right_arrow.png" maxH="1rem" />
				<Text>{faq.ques}</Text>
			</Flex> */}
		</Center>
	);
}

export default FaqList;
