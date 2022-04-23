import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const activeLabelStyles = {
	transform: 'scale(0.85) translateY(-24px)',
}

const theme = extendTheme({
	components: {
		Form: {
			variants: {
				floating: {
					container: {
						_focusWithin: {
							label: {
								...activeLabelStyles,
							},
						},
						'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
						{
							...activeLabelStyles,
						},
						label: {
							top: 0,
							left: 0,
							zIndex: 2,
							position: 'absolute',
							backgroundColor: 'gray',
							pointerEvents: 'none',
							mx: 3,
							px: 1,
							my: 2,
							transformOrigin: 'left top'
						},
					},
				},
			},
		},
	},
	styles: {
		global: {
			body: {
				// bg: "url('./images/bg.jpg')",
				bg: "gray"
				// bgSize: 'cover',
				// bgRepeat: 'no-repeat'
			}
		}
	}
})

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
