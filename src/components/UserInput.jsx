export default function UserInput({ onChange, value }) {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input
						type="number"
						required
						onChange={(e) => onChange('initialInvestment', e.target.value)}
						value={value.initialInvestment}
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type="number"
						required
						onChange={(e) => onChange('annualInvestment', e.target.value)}
						value={value.annualInvestment}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input
						type="number"
						required
						onChange={(e) => onChange('expectedReturn', e.target.value)}
						value={value.expectedReturn}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type="number"
						required
						onChange={(e) => onChange('duration', e.target.value)}
						value={value.duration}
					/>
				</p>
			</div>
		</section>
	);
}
