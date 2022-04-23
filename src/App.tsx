import { Text, Flex, Image, Center, Input, FormLabel, FormControl, Checkbox, Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
	const [cblv, setcblv] = useState<number>()
	const [cdex, setcdex] = useState<number>()
	const [cjlvl, setcjlvl] = useState<number>()
	const [tblv, settblv] = useState<number>()
	const [tcurrentweight, settcurrentweight] = useState<number>()
	const [tmaxweight, settmaxweight] = useState<number>()
	const [tagi, settagi] = useState<number>()
	const [tluk, settluk] = useState<number>()
	const [isLeto, setIsLeto] = useState<boolean>(false)
	const [result, setResult] = useState<string>()
	const [comment, setComment] = useState<string>()
	const [err, setErr] = useState<string>()

	const randomBetween = (min: number, max: number): number => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const calculate = () => {
		setErr("")
		setResult("")
		setComment("")
		if (isLeto) {
			setComment(`"التصميت مهارة مش بالحظ"\n - Leto`)
			return setResult("100%")
		}
		if (!cblv || !cdex || !cjlvl || !tblv || !tcurrentweight || !tmaxweight || !tagi || !tluk)
			return setErr("Please fill all fields")
		const baseRate = 30
		const baseLevelRate = Math.round(cblv / 10)
		const dexRate = randomBetween(cdex / 12, cdex / 4)
		const jobLevelRate = cjlvl
		const baseLevelResist = Math.round(tblv / 10)
		const agiResist = randomBetween(tagi / 6, tagi / 3)
		const lukResist = Math.floor(tluk / 10)
		const weightResist = Math.floor((tmaxweight - tcurrentweight) / 100)
		const totalRate = baseRate + baseLevelRate + dexRate + jobLevelRate - baseLevelResist - agiResist - lukResist - weightResist
		setResult(`
			Success Rate: ${totalRate}%
				Base Rate: ${baseRate}%
				Base Level Rate: ${baseLevelRate}%
				Dex Rate: ${dexRate}%
				Job Level Rate: ${jobLevelRate}%
				Base Level Resist: ${baseLevelResist}%
				Agi Resist: ${agiResist}%
				Luk Resist: ${lukResist}%
				Weight Resist: ${weightResist}%
				`)
	}

	return (
		<div>
			<Flex my="10" width="100" alignItems="center" flexDirection="row" justifyContent="center">
				<Flex direction="column">
					<Text fontSize="3xl" color="#fff" fontWeight="bold">Masqurade Success Percentage Calculator</Text>
					<Text color="#fff">This project is made to demonstrate how horrendous the official masqurade success equasion is.</Text>
					<Text color="#fff">Formula: base level / 10 + random(dex /12 , dex / 4) + job level + 30
						- base level / 10 + random(agi/6, agi/3) + luk / 10 + (max weight - ccurrent weight) / 100</Text>
				</Flex>
			</Flex>

			<Center>
				<Flex justifyContent="space-between" alignItems="start" direction="row" width="50%">
					<Flex justifyContent="center" alignItems="center" direction="column">
						<Text color="#fff">Shadow Chaser Stats</Text>
						<Image src="/images/Shadow_Chaser.png" />
						<FormControl mt="3" variant="floating" id="cblv" isRequired defaultValue={130}>
							<Input color="#fff" value={cblv} onChange={e => setcblv(parseInt(e.target.value))} type="number" placeholder=" " isInvalid={cblv ? cblv < 0 || cblv > 250 : false} />
							<FormLabel color="#fff">Base Level</FormLabel>
						</FormControl>
						<FormControl mt="3" variant="floating" id="cblv" isRequired defaultValue={130}>
							<Input color="#fff" value={cjlvl} onChange={e => setcjlvl(parseInt(e.target.value))} type="number" placeholder=" " isInvalid={cjlvl ? cjlvl < 0 || cjlvl > 70 : false} />
							<FormLabel color="#fff">Job Level</FormLabel>
						</FormControl>
						<FormControl mt="3" variant="floating" id="cdex" isRequired defaultValue={130}>
							<Input placeholder=" " onChange={e => setcdex(parseInt(e.target.value))} type="number" isInvalid={cdex ? cdex < 0 : false} color="#fff"
							/>
							<FormLabel color="#fff">Total Dex</FormLabel>
						</FormControl>
						<Checkbox mt="3" checked={isLeto} onChange={e => setIsLeto(e.target.checked)} color="#fff">Is Leto?</Checkbox>
					</Flex>
					<Flex height="50%" justifyContent="center" alignItems="center" direction="column">
						<Text color="#fff">Target Stats</Text>
						<Image src="/images/Novice.png" />
						<FormControl mt="3" variant="floating" id="jblv" isRequired defaultValue={130}>
							<Input color="#fff" value={tblv} onChange={e => settblv(parseInt(e.target.value))} type="number" placeholder=" " isInvalid={tblv ? tblv < 0 || tblv > 250 : false} />
							<FormLabel color="#fff">Base Level</FormLabel>
						</FormControl>
						<FormControl mt="3" variant="floating" id="jblv" isRequired defaultValue={130}>
							<Input color="#fff" value={tagi} onChange={e => settagi(parseInt(e.target.value))} type="number" placeholder=" " />
							<FormLabel color="#fff">Total Agi</FormLabel>
						</FormControl>

						<FormControl mt="3" variant="floating" id="jblv" isRequired defaultValue={130} >
							<Input color="#fff" value={tluk} onChange={e => settluk(parseInt(e.target.value))} type="number" placeholder=" " />
							<FormLabel color="#fff">Total Luk</FormLabel>
						</FormControl>
						<FormControl mx="3" mt="3" variant="floating" id="jblv" isRequired defaultValue={130}>
							<Input color="#fff" value={tcurrentweight} onChange={e => settcurrentweight(parseInt(e.target.value))} type="number" placeholder=" " />
							<FormLabel color="#fff">Current Weight</FormLabel>
						</FormControl>
						<FormControl mt="3" variant="floating" id="jblv" isRequired defaultValue={130}>
							<Input color="#fff" value={tmaxweight} onChange={e => settmaxweight(parseInt(e.target.value))} type="number" placeholder=" " isInvalid={tcurrentweight && tmaxweight ? tcurrentweight > tmaxweight : false} />
							<FormLabel color="#fff">Max Weight</FormLabel>
						</FormControl>
					</Flex>
				</Flex>

			</Center>
			<Center mt="5">
				<Flex direction="column" justifyContent="center" alignItems="center">
					{result &&
						<Text color="#FFF">{result} </Text>
					}
					{comment &&
						<Text color="#e3e3e3">{comment} </Text>
					}
					{err &&
						<Text fontSize="xl" color="#fff">{err}</Text>
					}
					<Button mt="3" width="50%" onClick={calculate}>Calculate</Button>
				</Flex>
			</Center>
		</div >
	);
}

export default App;
