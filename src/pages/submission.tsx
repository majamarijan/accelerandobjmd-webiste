import Wrapper from '../components/Layout/Layout';

export default function Submission() {
	return (
		<Wrapper title='Submission' description='Submission page'>
			<div className='submission_grid'>
				<div className='submission_title'>
					<img
						src={require('@site/static/img/megaphone.png').default}
						alt='icon'
						width={128}
					/>
					<h2>Call for Papers</h2>
				</div>
				<div className='submission_text'>
					<p>
						It is a pleasure to invite you to contribute your manuscript to
						Accelerando:Belgrade Journal of Music and Dance, eISSN: 2466-3913.
						It is a double-blind peer reviewed, Open Access, Scholarly Journal,
						conceived for publishing high-quality, original academic
						manuscripts, reviews, and bibliographical surveys in various fields
						of music and dance, traditional, contemporary, and arts education.
					</p>
					<p>
						Accelerando: BJMD is aimed at providing scholarly information,
						visual and audio materials for students, researchers, lecturers and
						professionals. In addition, we encourage interdisciplinary
						connections in which researchers in various domains can apply their
						own skills and knowledge. Journal welcomes contributions from both
						young and established scholars.
					</p>
				</div>
			</div>
			<div className='submission_grid bg-beige dark:bg-beige/10'>
				<div className='submission_title'>
					<img
						src={require('@site/static/img/papers.png').default}
						alt='icon'
						width={128}
					/>
					<h2>Submission</h2>
				</div>
				<div className='submission_text'>
					<ul>
						<li>
							The submitted paper must not be published before or be under
							submission at any other journal at a time.
						</li>
						<li>
							Submission of proposal with title, author's affiliations, abstract
							(up to 250 words) and keywords in English.
						</li>
						<li>
							Authors are usually informed within two weeks by the decision
							email if the paper is not being considered or has to be revised
							and resubmitted.
						</li>
						<li>
							We encourage the paper submission in English, but submissions in
							other major European languages will be considered equally.
						</li>
					</ul>
				</div>
			</div>
			<div className='submission_grid bg-neutral dark:bg-dark dark:text-neutral'>
				<div className='submission_title'>
					<img
						src={require('@site/static/img/policy.png').default}
						alt='icon'
						width={128}
					/>
					<h2>Submission Policy</h2>
				</div>
				<div className='submission_text'>
					<ol>
						<li>
							Authors submit their manuscripts through Contact Form. Upon
							submission, the authors will be e-mailed that their manuscripts
							are received.
						</li>
						<li>
							All abstracts of submitted manuscripts will be processed through
							preliminary English language check. Manuscripts written in English
							language will be examined in their entirety. The manuscripts
							having poor grammar or English language will be given back to the
							authors within two weeks of receipt for re-submission. If accepted
							after re-submission, the manuscript will enter the double blind
							peer review process, and the author will be informed about it.
						</li>
						<li>
							Within a month the author will be emailed if the manuscript is
							accepted, rejected or has to be revised. Authors who receive a
							decision of Minor Revision or Major Revision have 20 days to
							resubmit the revised manuscript. The revised manuscript will be
							re-assigned to the reviewers. The refereeing procedures are to be
							done again, and in less than two weeks the author will be emailed
							the final decision.
						</li>
						Authors will be informed in a couple of days after their papers have
						been published. Before publishing they will be able to check their
						papers, and asked for the corrections to be made and it will be done
						to them. Authors of manuscripts rejected at this stage will normally
						be informed within two weeks of receipt. Manuscripts may be rejected
						for the following reasons: if they are insufficiently original, have
						serious scientific flaws, or are outside the aims and scope of the
						journal.{' '}
					</ol>
				</div>
			</div>
		</Wrapper>
	);
}
