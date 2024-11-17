import Wrapper from '../components/Layout/Layout';

export default function ReviewPolicy(): JSX.Element {
  return (
		<Wrapper title='Review Policy' description='Review Policy'>
				<div className='header-lg'><h1>Review Policy</h1></div>
			<div className='main'>
				<h4>
					Double-Blind Review Process: ​Explicit procedures for external
					peer-review
				</h4>
				<ul>
					<li>
						All manuscripts submitted to Accelerando: BJMD are subject to a
						rigorous external double-blind peer review process.
					</li>
					<li>
						Papers written by Accelerando: BJMD editors undergo external
						peer-review like any other submitted papers.
					</li>
					<li>
						Received manuscripts must not be under simultaneous consideration by
						any other publication.
					</li>
					<li>
						We welcome suggestions for referees from the author: three to four
						experts could be suggested, their names, affiliations and email
						addresses noted and sent accompanying each manuscript through the
						online manuscript submission system. The Editor-in-Chief’s decision
						on the choice of peer reviewers should be final. Referees suggested
						must not be from the same institution as the author nor they should
						be in any way connected with the author during his research and work
						on the paper, and should have expert knowledge of the subject. In
						addition, reviewers should not have conflicts of interest which
						would interfere with their objectivity.{' '}
					</li>
					<li>Referees are chosen according to their expertise.</li>
					<li>
						Reviewers are known only to the editors not to the authors or to the
						third party. Correspondence among those involved in the refereeing
						procedures is performing through emails and by editor-in-chief's
						mediation.
					</li>
					<li>
						Referees are asked to evaluate whether the manuscript is original,
						methodologically sound and adequately described, and has results
						which are clearly presented and support the conclusions. If there
						are relevant and appropriate sources which have not be cited the
						referees are obliged to suggest them to the author/authors as
						references are to be up to date and relevant.
					</li>
					<li>
						Referees are not expected to correct language mistakes or copy-edit
						manuscripts. After agreeing to review a manuscript, external
						reviewers are typically granted 20 to 30 days to complete the
						assignment. We will follow up with late reviewers and keep authors
						informed if there are any delays.
					</li>
					<li>
						Type of review process which is employed is double blind reviewing,
						where both the referee and author remain anonymous throughout the
						process.
					</li>
					<li>
						Duration of review process depends on the length of the manuscript,
						but usually the manuscript will be reviewed within a month.
					</li>
					<li>Referees may request more than one revision of a manuscript.</li>
					<li>
						Referees advise their decision to accept or reject the manuscript to
						the Editor-in-Chief, whose decision to accept or reject the
						manuscript is final. The decision will be sent to the author along
						with the recommendations made by the referees.
					</li>
					<li>
						Authors may enter the names of potential peer reviewers they wish to
						exclude from consideration in the peer review of their manuscript,
						and in this situation the editorial team will respect these requests
						so long as this does not interfere with the objective valuation of
						the submission.
					</li>
					<li>
						The submissions could be evaluated by more than 2 external reviewers
						in particular situations.{' '}
					</li>
					<li>
						After evaluation, the possible decisions may be as following:
						<ul>
							<li>reject,</li>
							<li>
								approve with the further minimal changes (Minor Revision),{' '}
							</li>
							<li>approve with the further basic changes (Major Revision)</li>
							<li>approve without changes (Accepted).</li>
						</ul>
					</li>
					<li>
						Authors who receive a decision of Minor Revision or Major Revision
						have 20 days to resubmit the revised manuscript. The revised
						manuscript will be re-assigned to the reviewers. The refereeing
						procedures are to be done again, and in less than two weeks the
						author will be emailed the final decision.{' '}
					</li>
				</ul>
				<p>
					Editor-in-Chief send the following Example form to each reviewer by
					e-mail:
        </p>
        <div className='figureBox'>
          <figure>
          <img src={require('@site/static/img/table-for-reviewers.jpeg').default} alt='example' />

          </figure>

        </div>
			</div>
		</Wrapper>
	);
}
