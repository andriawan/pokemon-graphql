import { 
  SectionFailed, 
  WrapperFailed,
  TextDescriptionFailed
} from "../../styled/components/Alert";
import { css } from '@emotion/css'

export default function Failed({ name }) {
  return (
    <WrapperFailed>
      <SectionFailed>
        <h1 className={css`${TextDescriptionFailed}`}>
          You failed catch {name}. Try again!
        </h1>
      </SectionFailed>
    </WrapperFailed>
  )
}