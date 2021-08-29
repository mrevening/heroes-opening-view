import Button from './Button'

export default function Scenario({closeAction}){
    return (
        <>
        <div>Scenario List:</div>
        <Button text="OKAY" action={closeAction} />
        </>
    );
}