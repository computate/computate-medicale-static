
// POST //

async function postInscriptionMedicale($formulaireValeurs, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			ajouterLueur($formulaireValeurs.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			ajouterErreur($formulaireValeurs.next('button'));
		};
	}

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
		vals['pk'] = valeurPk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		vals['cree'] = valeurCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		vals['modifie'] = valeurModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
		vals['objetId'] = valeurObjetId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	if(valeurInscriptionApprouve != null && valeurInscriptionApprouve !== '')
		vals['inscriptionApprouve'] = valeurInscriptionApprouve;

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	if(valeurInscriptionImmunisations != null && valeurInscriptionImmunisations !== '')
		vals['inscriptionImmunisations'] = valeurInscriptionImmunisations;

	var valeurFamilleAddresse = $formulaireValeurs.find('.valeurFamilleAddresse').val();
	if(valeurFamilleAddresse != null && valeurFamilleAddresse !== '')
		vals['familleAddresse'] = valeurFamilleAddresse;

	var valeurInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.valeurInscriptionConsiderationsSpeciales').val();
	if(valeurInscriptionConsiderationsSpeciales != null && valeurInscriptionConsiderationsSpeciales !== '')
		vals['inscriptionConsiderationsSpeciales'] = valeurInscriptionConsiderationsSpeciales;

	var valeurPatientConditionsMedicales = $formulaireValeurs.find('.valeurPatientConditionsMedicales').val();
	if(valeurPatientConditionsMedicales != null && valeurPatientConditionsMedicales !== '')
		vals['patientConditionsMedicales'] = valeurPatientConditionsMedicales;

	var valeurPatientCliniquesPrecedemmentFrequentees = $formulaireValeurs.find('.valeurPatientCliniquesPrecedemmentFrequentees').val();
	if(valeurPatientCliniquesPrecedemmentFrequentees != null && valeurPatientCliniquesPrecedemmentFrequentees !== '')
		vals['patientCliniquesPrecedemmentFrequentees'] = valeurPatientCliniquesPrecedemmentFrequentees;

	var valeurFamilleCommentVousConnaissezClinique = $formulaireValeurs.find('.valeurFamilleCommentVousConnaissezClinique').val();
	if(valeurFamilleCommentVousConnaissezClinique != null && valeurFamilleCommentVousConnaissezClinique !== '')
		vals['familleCommentVousConnaissezClinique'] = valeurFamilleCommentVousConnaissezClinique;

	var valeurPatientDescription = $formulaireValeurs.find('.valeurPatientDescription').val();
	if(valeurPatientDescription != null && valeurPatientDescription !== '')
		vals['patientDescription'] = valeurPatientDescription;

	var valeurPatientObjectifs = $formulaireValeurs.find('.valeurPatientObjectifs').val();
	if(valeurPatientObjectifs != null && valeurPatientObjectifs !== '')
		vals['patientObjectifs'] = valeurPatientObjectifs;

		vals['patientCle'] = [valeurPatientCle];
	if(valeurPatientCle != null && valeurPatientCle !== '')
		vals['patientCle'] = valeurPatientCle;

	var valeurUtilisateurCles = [];
	$formulaireValeurs.find('input.valeurUtilisateurCles:checked').each(function(index) {
		valeurUtilisateurCles.push($(this).val());
	});
	if(valeurUtilisateurCles.length > 0)
		vals['utilisateurCles'] = valeurUtilisateurCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
		vals['sessionId'] = valeurSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
		vals['utilisateurId'] = valeurUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
		vals['utilisateurCle'] = valeurUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	var valeurPatientNomComplet = $formulaireValeurs.find('.valeurPatientNomComplet').val();
	if(valeurPatientNomComplet != null && valeurPatientNomComplet !== '')
		vals['patientNomComplet'] = valeurPatientNomComplet;

	var valeurPatientNomCompletPrefere = $formulaireValeurs.find('.valeurPatientNomCompletPrefere').val();
	if(valeurPatientNomCompletPrefere != null && valeurPatientNomCompletPrefere !== '')
		vals['patientNomCompletPrefere'] = valeurPatientNomCompletPrefere;

	var valeurPatientDateNaissance = $formulaireValeurs.find('.valeurPatientDateNaissance').val();
	if(valeurPatientDateNaissance != null && valeurPatientDateNaissance !== '')
		vals['patientDateNaissance'] = valeurPatientDateNaissance;

	var valeurCliniqueAddresse = $formulaireValeurs.find('.valeurCliniqueAddresse').val();
	if(valeurCliniqueAddresse != null && valeurCliniqueAddresse !== '')
		vals['cliniqueAddresse'] = valeurCliniqueAddresse;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
		vals['customerProfileId'] = valeurCustomerProfileId;

	var valeurInscriptionSignature1 = $formulaireValeurs.find('.valeurInscriptionSignature1').val();
	if(valeurInscriptionSignature1 != null && valeurInscriptionSignature1 !== '')
		vals['inscriptionSignature1'] = valeurInscriptionSignature1;

	var valeurInscriptionSignature2 = $formulaireValeurs.find('.valeurInscriptionSignature2').val();
	if(valeurInscriptionSignature2 != null && valeurInscriptionSignature2 !== '')
		vals['inscriptionSignature2'] = valeurInscriptionSignature2;

	var valeurInscriptionSignature3 = $formulaireValeurs.find('.valeurInscriptionSignature3').val();
	if(valeurInscriptionSignature3 != null && valeurInscriptionSignature3 !== '')
		vals['inscriptionSignature3'] = valeurInscriptionSignature3;

	var valeurInscriptionSignature4 = $formulaireValeurs.find('.valeurInscriptionSignature4').val();
	if(valeurInscriptionSignature4 != null && valeurInscriptionSignature4 !== '')
		vals['inscriptionSignature4'] = valeurInscriptionSignature4;

	var valeurInscriptionSignature5 = $formulaireValeurs.find('.valeurInscriptionSignature5').val();
	if(valeurInscriptionSignature5 != null && valeurInscriptionSignature5 !== '')
		vals['inscriptionSignature5'] = valeurInscriptionSignature5;

	var valeurInscriptionSignature6 = $formulaireValeurs.find('.valeurInscriptionSignature6').val();
	if(valeurInscriptionSignature6 != null && valeurInscriptionSignature6 !== '')
		vals['inscriptionSignature6'] = valeurInscriptionSignature6;

	var valeurInscriptionSignature7 = $formulaireValeurs.find('.valeurInscriptionSignature7').val();
	if(valeurInscriptionSignature7 != null && valeurInscriptionSignature7 !== '')
		vals['inscriptionSignature7'] = valeurInscriptionSignature7;

	var valeurInscriptionSignature8 = $formulaireValeurs.find('.valeurInscriptionSignature8').val();
	if(valeurInscriptionSignature8 != null && valeurInscriptionSignature8 !== '')
		vals['inscriptionSignature8'] = valeurInscriptionSignature8;

	var valeurInscriptionSignature9 = $formulaireValeurs.find('.valeurInscriptionSignature9').val();
	if(valeurInscriptionSignature9 != null && valeurInscriptionSignature9 !== '')
		vals['inscriptionSignature9'] = valeurInscriptionSignature9;

	var valeurInscriptionSignature10 = $formulaireValeurs.find('.valeurInscriptionSignature10').val();
	if(valeurInscriptionSignature10 != null && valeurInscriptionSignature10 !== '')
		vals['inscriptionSignature10'] = valeurInscriptionSignature10;

	var valeurInscriptionDate1 = $formulaireValeurs.find('.valeurInscriptionDate1').val();
	if(valeurInscriptionDate1 != null && valeurInscriptionDate1 !== '')
		vals['inscriptionDate1'] = valeurInscriptionDate1;

	var valeurInscriptionDate2 = $formulaireValeurs.find('.valeurInscriptionDate2').val();
	if(valeurInscriptionDate2 != null && valeurInscriptionDate2 !== '')
		vals['inscriptionDate2'] = valeurInscriptionDate2;

	var valeurInscriptionDate3 = $formulaireValeurs.find('.valeurInscriptionDate3').val();
	if(valeurInscriptionDate3 != null && valeurInscriptionDate3 !== '')
		vals['inscriptionDate3'] = valeurInscriptionDate3;

	var valeurInscriptionDate4 = $formulaireValeurs.find('.valeurInscriptionDate4').val();
	if(valeurInscriptionDate4 != null && valeurInscriptionDate4 !== '')
		vals['inscriptionDate4'] = valeurInscriptionDate4;

	var valeurInscriptionDate5 = $formulaireValeurs.find('.valeurInscriptionDate5').val();
	if(valeurInscriptionDate5 != null && valeurInscriptionDate5 !== '')
		vals['inscriptionDate5'] = valeurInscriptionDate5;

	var valeurInscriptionDate6 = $formulaireValeurs.find('.valeurInscriptionDate6').val();
	if(valeurInscriptionDate6 != null && valeurInscriptionDate6 !== '')
		vals['inscriptionDate6'] = valeurInscriptionDate6;

	var valeurInscriptionDate7 = $formulaireValeurs.find('.valeurInscriptionDate7').val();
	if(valeurInscriptionDate7 != null && valeurInscriptionDate7 !== '')
		vals['inscriptionDate7'] = valeurInscriptionDate7;

	var valeurInscriptionDate8 = $formulaireValeurs.find('.valeurInscriptionDate8').val();
	if(valeurInscriptionDate8 != null && valeurInscriptionDate8 !== '')
		vals['inscriptionDate8'] = valeurInscriptionDate8;

	var valeurInscriptionDate9 = $formulaireValeurs.find('.valeurInscriptionDate9').val();
	if(valeurInscriptionDate9 != null && valeurInscriptionDate9 !== '')
		vals['inscriptionDate9'] = valeurInscriptionDate9;

	var valeurInscriptionDate10 = $formulaireValeurs.find('.valeurInscriptionDate10').val();
	if(valeurInscriptionDate10 != null && valeurInscriptionDate10 !== '')
		vals['inscriptionDate10'] = valeurInscriptionDate10;

	$.ajax({
		url: '/api/inscription'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postInscriptionMedicaleVals(vals, success, error) {
	$.ajax({
		url: '/api/inscription'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportInscriptionMedicale($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportInscriptionMedicaleVals(JSON.parse(json), success, error);
}

function putimportInscriptionMedicaleVals(json, success, error) {
	$.ajax({
		url: '/api/inscription/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionInscriptionMedicale($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionInscriptionMedicaleVals(JSON.parse(json), success, error);
}

function putfusionInscriptionMedicaleVals(json, success, error) {
	$.ajax({
		url: '/api/inscription/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieInscriptionMedicale($formulaireValeurs, pk, success, error) {
	var vals = {};

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
		vals['pk'] = valeurPk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		vals['cree'] = valeurCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		vals['modifie'] = valeurModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
		vals['objetId'] = valeurObjetId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	if(valeurInscriptionApprouve != null && valeurInscriptionApprouve !== '')
		vals['inscriptionApprouve'] = valeurInscriptionApprouve;

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	if(valeurInscriptionImmunisations != null && valeurInscriptionImmunisations !== '')
		vals['inscriptionImmunisations'] = valeurInscriptionImmunisations;

	var valeurFamilleAddresse = $formulaireValeurs.find('.valeurFamilleAddresse').val();
	if(valeurFamilleAddresse != null && valeurFamilleAddresse !== '')
		vals['familleAddresse'] = valeurFamilleAddresse;

	var valeurInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.valeurInscriptionConsiderationsSpeciales').val();
	if(valeurInscriptionConsiderationsSpeciales != null && valeurInscriptionConsiderationsSpeciales !== '')
		vals['inscriptionConsiderationsSpeciales'] = valeurInscriptionConsiderationsSpeciales;

	var valeurPatientConditionsMedicales = $formulaireValeurs.find('.valeurPatientConditionsMedicales').val();
	if(valeurPatientConditionsMedicales != null && valeurPatientConditionsMedicales !== '')
		vals['patientConditionsMedicales'] = valeurPatientConditionsMedicales;

	var valeurPatientCliniquesPrecedemmentFrequentees = $formulaireValeurs.find('.valeurPatientCliniquesPrecedemmentFrequentees').val();
	if(valeurPatientCliniquesPrecedemmentFrequentees != null && valeurPatientCliniquesPrecedemmentFrequentees !== '')
		vals['patientCliniquesPrecedemmentFrequentees'] = valeurPatientCliniquesPrecedemmentFrequentees;

	var valeurFamilleCommentVousConnaissezClinique = $formulaireValeurs.find('.valeurFamilleCommentVousConnaissezClinique').val();
	if(valeurFamilleCommentVousConnaissezClinique != null && valeurFamilleCommentVousConnaissezClinique !== '')
		vals['familleCommentVousConnaissezClinique'] = valeurFamilleCommentVousConnaissezClinique;

	var valeurPatientDescription = $formulaireValeurs.find('.valeurPatientDescription').val();
	if(valeurPatientDescription != null && valeurPatientDescription !== '')
		vals['patientDescription'] = valeurPatientDescription;

	var valeurPatientObjectifs = $formulaireValeurs.find('.valeurPatientObjectifs').val();
	if(valeurPatientObjectifs != null && valeurPatientObjectifs !== '')
		vals['patientObjectifs'] = valeurPatientObjectifs;

	var valeurPatientCle = $formulaireValeurs.find('input.valeurPatientCle:checked').val();
	if(valeurPatientCle != null && valeurPatientCle !== '')
		vals['patientCle'] = valeurPatientCle;

	var valeurUtilisateurCles = $formulaireValeurs.find('input.valeurUtilisateurCles:checked').val();
	if(valeurUtilisateurCles != null && valeurUtilisateurCles !== '')
		vals['utilisateurCles'] = [valeurUtilisateurCles];

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
		vals['sessionId'] = valeurSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
		vals['utilisateurId'] = valeurUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
		vals['utilisateurCle'] = valeurUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	var valeurPatientNomComplet = $formulaireValeurs.find('.valeurPatientNomComplet').val();
	if(valeurPatientNomComplet != null && valeurPatientNomComplet !== '')
		vals['patientNomComplet'] = valeurPatientNomComplet;

	var valeurPatientNomCompletPrefere = $formulaireValeurs.find('.valeurPatientNomCompletPrefere').val();
	if(valeurPatientNomCompletPrefere != null && valeurPatientNomCompletPrefere !== '')
		vals['patientNomCompletPrefere'] = valeurPatientNomCompletPrefere;

	var valeurPatientDateNaissance = $formulaireValeurs.find('.valeurPatientDateNaissance').val();
	if(valeurPatientDateNaissance != null && valeurPatientDateNaissance !== '')
		vals['patientDateNaissance'] = valeurPatientDateNaissance;

	var valeurCliniqueAddresse = $formulaireValeurs.find('.valeurCliniqueAddresse').val();
	if(valeurCliniqueAddresse != null && valeurCliniqueAddresse !== '')
		vals['cliniqueAddresse'] = valeurCliniqueAddresse;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
		vals['customerProfileId'] = valeurCustomerProfileId;

	var valeurInscriptionSignature1 = $formulaireValeurs.find('.valeurInscriptionSignature1').val();
	if(valeurInscriptionSignature1 != null && valeurInscriptionSignature1 !== '')
		vals['inscriptionSignature1'] = valeurInscriptionSignature1;

	var valeurInscriptionSignature2 = $formulaireValeurs.find('.valeurInscriptionSignature2').val();
	if(valeurInscriptionSignature2 != null && valeurInscriptionSignature2 !== '')
		vals['inscriptionSignature2'] = valeurInscriptionSignature2;

	var valeurInscriptionSignature3 = $formulaireValeurs.find('.valeurInscriptionSignature3').val();
	if(valeurInscriptionSignature3 != null && valeurInscriptionSignature3 !== '')
		vals['inscriptionSignature3'] = valeurInscriptionSignature3;

	var valeurInscriptionSignature4 = $formulaireValeurs.find('.valeurInscriptionSignature4').val();
	if(valeurInscriptionSignature4 != null && valeurInscriptionSignature4 !== '')
		vals['inscriptionSignature4'] = valeurInscriptionSignature4;

	var valeurInscriptionSignature5 = $formulaireValeurs.find('.valeurInscriptionSignature5').val();
	if(valeurInscriptionSignature5 != null && valeurInscriptionSignature5 !== '')
		vals['inscriptionSignature5'] = valeurInscriptionSignature5;

	var valeurInscriptionSignature6 = $formulaireValeurs.find('.valeurInscriptionSignature6').val();
	if(valeurInscriptionSignature6 != null && valeurInscriptionSignature6 !== '')
		vals['inscriptionSignature6'] = valeurInscriptionSignature6;

	var valeurInscriptionSignature7 = $formulaireValeurs.find('.valeurInscriptionSignature7').val();
	if(valeurInscriptionSignature7 != null && valeurInscriptionSignature7 !== '')
		vals['inscriptionSignature7'] = valeurInscriptionSignature7;

	var valeurInscriptionSignature8 = $formulaireValeurs.find('.valeurInscriptionSignature8').val();
	if(valeurInscriptionSignature8 != null && valeurInscriptionSignature8 !== '')
		vals['inscriptionSignature8'] = valeurInscriptionSignature8;

	var valeurInscriptionSignature9 = $formulaireValeurs.find('.valeurInscriptionSignature9').val();
	if(valeurInscriptionSignature9 != null && valeurInscriptionSignature9 !== '')
		vals['inscriptionSignature9'] = valeurInscriptionSignature9;

	var valeurInscriptionSignature10 = $formulaireValeurs.find('.valeurInscriptionSignature10').val();
	if(valeurInscriptionSignature10 != null && valeurInscriptionSignature10 !== '')
		vals['inscriptionSignature10'] = valeurInscriptionSignature10;

	var valeurInscriptionDate1 = $formulaireValeurs.find('.valeurInscriptionDate1').val();
	if(valeurInscriptionDate1 != null && valeurInscriptionDate1 !== '')
		vals['inscriptionDate1'] = valeurInscriptionDate1;

	var valeurInscriptionDate2 = $formulaireValeurs.find('.valeurInscriptionDate2').val();
	if(valeurInscriptionDate2 != null && valeurInscriptionDate2 !== '')
		vals['inscriptionDate2'] = valeurInscriptionDate2;

	var valeurInscriptionDate3 = $formulaireValeurs.find('.valeurInscriptionDate3').val();
	if(valeurInscriptionDate3 != null && valeurInscriptionDate3 !== '')
		vals['inscriptionDate3'] = valeurInscriptionDate3;

	var valeurInscriptionDate4 = $formulaireValeurs.find('.valeurInscriptionDate4').val();
	if(valeurInscriptionDate4 != null && valeurInscriptionDate4 !== '')
		vals['inscriptionDate4'] = valeurInscriptionDate4;

	var valeurInscriptionDate5 = $formulaireValeurs.find('.valeurInscriptionDate5').val();
	if(valeurInscriptionDate5 != null && valeurInscriptionDate5 !== '')
		vals['inscriptionDate5'] = valeurInscriptionDate5;

	var valeurInscriptionDate6 = $formulaireValeurs.find('.valeurInscriptionDate6').val();
	if(valeurInscriptionDate6 != null && valeurInscriptionDate6 !== '')
		vals['inscriptionDate6'] = valeurInscriptionDate6;

	var valeurInscriptionDate7 = $formulaireValeurs.find('.valeurInscriptionDate7').val();
	if(valeurInscriptionDate7 != null && valeurInscriptionDate7 !== '')
		vals['inscriptionDate7'] = valeurInscriptionDate7;

	var valeurInscriptionDate8 = $formulaireValeurs.find('.valeurInscriptionDate8').val();
	if(valeurInscriptionDate8 != null && valeurInscriptionDate8 !== '')
		vals['inscriptionDate8'] = valeurInscriptionDate8;

	var valeurInscriptionDate9 = $formulaireValeurs.find('.valeurInscriptionDate9').val();
	if(valeurInscriptionDate9 != null && valeurInscriptionDate9 !== '')
		vals['inscriptionDate9'] = valeurInscriptionDate9;

	var valeurInscriptionDate10 = $formulaireValeurs.find('.valeurInscriptionDate10').val();
	if(valeurInscriptionDate10 != null && valeurInscriptionDate10 !== '')
		vals['inscriptionDate10'] = valeurInscriptionDate10;

	putcopieInscriptionMedicaleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieInscriptionMedicaleVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/inscription/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchInscriptionMedicale($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchInscriptionMedicaleFiltres($formulaireFiltres);

	var vals = {};

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
	var removePk = $formulaireFiltres.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formulaireValeurs.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formulaireValeurs.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formulaireValeurs.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
	var removeCree = $formulaireFiltres.find('.removeCree').val() === 'true';
	var setCree = removeCree ? null : $formulaireValeurs.find('.setCree').val();
	if(removeCree || setCree != null && setCree !== '')
		vals['setCree'] = setCree;
	var addCree = $formulaireValeurs.find('.addCree').val();
	if(addCree != null && addCree !== '')
		vals['addCree'] = addCree;
	var removeCree = $formulaireValeurs.find('.removeCree').val();
	if(removeCree != null && removeCree !== '')
		vals['removeCree'] = removeCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
	var removeModifie = $formulaireFiltres.find('.removeModifie').val() === 'true';
	var setModifie = removeModifie ? null : $formulaireValeurs.find('.setModifie').val();
	if(removeModifie || setModifie != null && setModifie !== '')
		vals['setModifie'] = setModifie;
	var addModifie = $formulaireValeurs.find('.addModifie').val();
	if(addModifie != null && addModifie !== '')
		vals['addModifie'] = addModifie;
	var removeModifie = $formulaireValeurs.find('.removeModifie').val();
	if(removeModifie != null && removeModifie !== '')
		vals['removeModifie'] = removeModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
	var removeObjetId = $formulaireFiltres.find('.removeObjetId').val() === 'true';
	var setObjetId = removeObjetId ? null : $formulaireValeurs.find('.setObjetId').val();
	if(removeObjetId || setObjetId != null && setObjetId !== '')
		vals['setObjetId'] = setObjetId;
	var addObjetId = $formulaireValeurs.find('.addObjetId').val();
	if(addObjetId != null && addObjetId !== '')
		vals['addObjetId'] = addObjetId;
	var removeObjetId = $formulaireValeurs.find('.removeObjetId').val();
	if(removeObjetId != null && removeObjetId !== '')
		vals['removeObjetId'] = removeObjetId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
	var removeArchive = $formulaireFiltres.find('.removeArchive').val() === 'true';
	var valeurArchiveSelectVal = $formulaireValeurs.find('select.setArchive').val();
	var valeurArchive = null;
	if(valeurArchiveSelectVal !== '')
		valeurArchive = valeurArchiveSelectVal == 'true';
	setArchive = removeArchive ? null : valeurArchive;
	if(removeArchive || setArchive != null && setArchive !== '')
		vals['setArchive'] = setArchive;
	var addArchive = $formulaireValeurs.find('.addArchive').prop('checked');
	if(addArchive != null && addArchive !== '')
		vals['addArchive'] = addArchive;
	var removeArchive = $formulaireValeurs.find('.removeArchive').prop('checked');
	if(removeArchive != null && removeArchive !== '')
		vals['removeArchive'] = removeArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
	var removeSupprime = $formulaireFiltres.find('.removeSupprime').val() === 'true';
	var valeurSupprimeSelectVal = $formulaireValeurs.find('select.setSupprime').val();
	var valeurSupprime = null;
	if(valeurSupprimeSelectVal !== '')
		valeurSupprime = valeurSupprimeSelectVal == 'true';
	setSupprime = removeSupprime ? null : valeurSupprime;
	if(removeSupprime || setSupprime != null && setSupprime !== '')
		vals['setSupprime'] = setSupprime;
	var addSupprime = $formulaireValeurs.find('.addSupprime').prop('checked');
	if(addSupprime != null && addSupprime !== '')
		vals['addSupprime'] = addSupprime;
	var removeSupprime = $formulaireValeurs.find('.removeSupprime').prop('checked');
	if(removeSupprime != null && removeSupprime !== '')
		vals['removeSupprime'] = removeSupprime;

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	if(valeurInscriptionApprouve != null && valeurInscriptionApprouve !== '')
	var removeInscriptionApprouve = $formulaireFiltres.find('.removeInscriptionApprouve').val() === 'true';
	var valeurInscriptionApprouveSelectVal = $formulaireValeurs.find('select.setInscriptionApprouve').val();
	var valeurInscriptionApprouve = null;
	if(valeurInscriptionApprouveSelectVal !== '')
		valeurInscriptionApprouve = valeurInscriptionApprouveSelectVal == 'true';
	setInscriptionApprouve = removeInscriptionApprouve ? null : valeurInscriptionApprouve;
	if(removeInscriptionApprouve || setInscriptionApprouve != null && setInscriptionApprouve !== '')
		vals['setInscriptionApprouve'] = setInscriptionApprouve;
	var addInscriptionApprouve = $formulaireValeurs.find('.addInscriptionApprouve').prop('checked');
	if(addInscriptionApprouve != null && addInscriptionApprouve !== '')
		vals['addInscriptionApprouve'] = addInscriptionApprouve;
	var removeInscriptionApprouve = $formulaireValeurs.find('.removeInscriptionApprouve').prop('checked');
	if(removeInscriptionApprouve != null && removeInscriptionApprouve !== '')
		vals['removeInscriptionApprouve'] = removeInscriptionApprouve;

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	if(valeurInscriptionImmunisations != null && valeurInscriptionImmunisations !== '')
	var removeInscriptionImmunisations = $formulaireFiltres.find('.removeInscriptionImmunisations').val() === 'true';
	var valeurInscriptionImmunisationsSelectVal = $formulaireValeurs.find('select.setInscriptionImmunisations').val();
	var valeurInscriptionImmunisations = null;
	if(valeurInscriptionImmunisationsSelectVal !== '')
		valeurInscriptionImmunisations = valeurInscriptionImmunisationsSelectVal == 'true';
	setInscriptionImmunisations = removeInscriptionImmunisations ? null : valeurInscriptionImmunisations;
	if(removeInscriptionImmunisations || setInscriptionImmunisations != null && setInscriptionImmunisations !== '')
		vals['setInscriptionImmunisations'] = setInscriptionImmunisations;
	var addInscriptionImmunisations = $formulaireValeurs.find('.addInscriptionImmunisations').prop('checked');
	if(addInscriptionImmunisations != null && addInscriptionImmunisations !== '')
		vals['addInscriptionImmunisations'] = addInscriptionImmunisations;
	var removeInscriptionImmunisations = $formulaireValeurs.find('.removeInscriptionImmunisations').prop('checked');
	if(removeInscriptionImmunisations != null && removeInscriptionImmunisations !== '')
		vals['removeInscriptionImmunisations'] = removeInscriptionImmunisations;

	var valeurFamilleAddresse = $formulaireValeurs.find('.valeurFamilleAddresse').val();
	if(valeurFamilleAddresse != null && valeurFamilleAddresse !== '')
	var removeFamilleAddresse = $formulaireFiltres.find('.removeFamilleAddresse').val() === 'true';
	var setFamilleAddresse = removeFamilleAddresse ? null : $formulaireValeurs.find('.setFamilleAddresse').val();
	if(removeFamilleAddresse || setFamilleAddresse != null && setFamilleAddresse !== '')
		vals['setFamilleAddresse'] = setFamilleAddresse;
	var addFamilleAddresse = $formulaireValeurs.find('.addFamilleAddresse').val();
	if(addFamilleAddresse != null && addFamilleAddresse !== '')
		vals['addFamilleAddresse'] = addFamilleAddresse;
	var removeFamilleAddresse = $formulaireValeurs.find('.removeFamilleAddresse').val();
	if(removeFamilleAddresse != null && removeFamilleAddresse !== '')
		vals['removeFamilleAddresse'] = removeFamilleAddresse;

	var valeurInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.valeurInscriptionConsiderationsSpeciales').val();
	if(valeurInscriptionConsiderationsSpeciales != null && valeurInscriptionConsiderationsSpeciales !== '')
	var removeInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.removeInscriptionConsiderationsSpeciales').val() === 'true';
	var setInscriptionConsiderationsSpeciales = removeInscriptionConsiderationsSpeciales ? null : $formulaireValeurs.find('.setInscriptionConsiderationsSpeciales').val();
	if(removeInscriptionConsiderationsSpeciales || setInscriptionConsiderationsSpeciales != null && setInscriptionConsiderationsSpeciales !== '')
		vals['setInscriptionConsiderationsSpeciales'] = setInscriptionConsiderationsSpeciales;
	var addInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.addInscriptionConsiderationsSpeciales').val();
	if(addInscriptionConsiderationsSpeciales != null && addInscriptionConsiderationsSpeciales !== '')
		vals['addInscriptionConsiderationsSpeciales'] = addInscriptionConsiderationsSpeciales;
	var removeInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.removeInscriptionConsiderationsSpeciales').val();
	if(removeInscriptionConsiderationsSpeciales != null && removeInscriptionConsiderationsSpeciales !== '')
		vals['removeInscriptionConsiderationsSpeciales'] = removeInscriptionConsiderationsSpeciales;

	var valeurPatientConditionsMedicales = $formulaireValeurs.find('.valeurPatientConditionsMedicales').val();
	if(valeurPatientConditionsMedicales != null && valeurPatientConditionsMedicales !== '')
	var removePatientConditionsMedicales = $formulaireFiltres.find('.removePatientConditionsMedicales').val() === 'true';
	var setPatientConditionsMedicales = removePatientConditionsMedicales ? null : $formulaireValeurs.find('.setPatientConditionsMedicales').val();
	if(removePatientConditionsMedicales || setPatientConditionsMedicales != null && setPatientConditionsMedicales !== '')
		vals['setPatientConditionsMedicales'] = setPatientConditionsMedicales;
	var addPatientConditionsMedicales = $formulaireValeurs.find('.addPatientConditionsMedicales').val();
	if(addPatientConditionsMedicales != null && addPatientConditionsMedicales !== '')
		vals['addPatientConditionsMedicales'] = addPatientConditionsMedicales;
	var removePatientConditionsMedicales = $formulaireValeurs.find('.removePatientConditionsMedicales').val();
	if(removePatientConditionsMedicales != null && removePatientConditionsMedicales !== '')
		vals['removePatientConditionsMedicales'] = removePatientConditionsMedicales;

	var valeurPatientCliniquesPrecedemmentFrequentees = $formulaireValeurs.find('.valeurPatientCliniquesPrecedemmentFrequentees').val();
	if(valeurPatientCliniquesPrecedemmentFrequentees != null && valeurPatientCliniquesPrecedemmentFrequentees !== '')
	var removePatientCliniquesPrecedemmentFrequentees = $formulaireFiltres.find('.removePatientCliniquesPrecedemmentFrequentees').val() === 'true';
	var setPatientCliniquesPrecedemmentFrequentees = removePatientCliniquesPrecedemmentFrequentees ? null : $formulaireValeurs.find('.setPatientCliniquesPrecedemmentFrequentees').val();
	if(removePatientCliniquesPrecedemmentFrequentees || setPatientCliniquesPrecedemmentFrequentees != null && setPatientCliniquesPrecedemmentFrequentees !== '')
		vals['setPatientCliniquesPrecedemmentFrequentees'] = setPatientCliniquesPrecedemmentFrequentees;
	var addPatientCliniquesPrecedemmentFrequentees = $formulaireValeurs.find('.addPatientCliniquesPrecedemmentFrequentees').val();
	if(addPatientCliniquesPrecedemmentFrequentees != null && addPatientCliniquesPrecedemmentFrequentees !== '')
		vals['addPatientCliniquesPrecedemmentFrequentees'] = addPatientCliniquesPrecedemmentFrequentees;
	var removePatientCliniquesPrecedemmentFrequentees = $formulaireValeurs.find('.removePatientCliniquesPrecedemmentFrequentees').val();
	if(removePatientCliniquesPrecedemmentFrequentees != null && removePatientCliniquesPrecedemmentFrequentees !== '')
		vals['removePatientCliniquesPrecedemmentFrequentees'] = removePatientCliniquesPrecedemmentFrequentees;

	var valeurFamilleCommentVousConnaissezClinique = $formulaireValeurs.find('.valeurFamilleCommentVousConnaissezClinique').val();
	if(valeurFamilleCommentVousConnaissezClinique != null && valeurFamilleCommentVousConnaissezClinique !== '')
	var removeFamilleCommentVousConnaissezClinique = $formulaireFiltres.find('.removeFamilleCommentVousConnaissezClinique').val() === 'true';
	var setFamilleCommentVousConnaissezClinique = removeFamilleCommentVousConnaissezClinique ? null : $formulaireValeurs.find('.setFamilleCommentVousConnaissezClinique').val();
	if(removeFamilleCommentVousConnaissezClinique || setFamilleCommentVousConnaissezClinique != null && setFamilleCommentVousConnaissezClinique !== '')
		vals['setFamilleCommentVousConnaissezClinique'] = setFamilleCommentVousConnaissezClinique;
	var addFamilleCommentVousConnaissezClinique = $formulaireValeurs.find('.addFamilleCommentVousConnaissezClinique').val();
	if(addFamilleCommentVousConnaissezClinique != null && addFamilleCommentVousConnaissezClinique !== '')
		vals['addFamilleCommentVousConnaissezClinique'] = addFamilleCommentVousConnaissezClinique;
	var removeFamilleCommentVousConnaissezClinique = $formulaireValeurs.find('.removeFamilleCommentVousConnaissezClinique').val();
	if(removeFamilleCommentVousConnaissezClinique != null && removeFamilleCommentVousConnaissezClinique !== '')
		vals['removeFamilleCommentVousConnaissezClinique'] = removeFamilleCommentVousConnaissezClinique;

	var valeurPatientDescription = $formulaireValeurs.find('.valeurPatientDescription').val();
	if(valeurPatientDescription != null && valeurPatientDescription !== '')
	var removePatientDescription = $formulaireFiltres.find('.removePatientDescription').val() === 'true';
	var setPatientDescription = removePatientDescription ? null : $formulaireValeurs.find('.setPatientDescription').val();
	if(removePatientDescription || setPatientDescription != null && setPatientDescription !== '')
		vals['setPatientDescription'] = setPatientDescription;
	var addPatientDescription = $formulaireValeurs.find('.addPatientDescription').val();
	if(addPatientDescription != null && addPatientDescription !== '')
		vals['addPatientDescription'] = addPatientDescription;
	var removePatientDescription = $formulaireValeurs.find('.removePatientDescription').val();
	if(removePatientDescription != null && removePatientDescription !== '')
		vals['removePatientDescription'] = removePatientDescription;

	var valeurPatientObjectifs = $formulaireValeurs.find('.valeurPatientObjectifs').val();
	if(valeurPatientObjectifs != null && valeurPatientObjectifs !== '')
	var removePatientObjectifs = $formulaireFiltres.find('.removePatientObjectifs').val() === 'true';
	var setPatientObjectifs = removePatientObjectifs ? null : $formulaireValeurs.find('.setPatientObjectifs').val();
	if(removePatientObjectifs || setPatientObjectifs != null && setPatientObjectifs !== '')
		vals['setPatientObjectifs'] = setPatientObjectifs;
	var addPatientObjectifs = $formulaireValeurs.find('.addPatientObjectifs').val();
	if(addPatientObjectifs != null && addPatientObjectifs !== '')
		vals['addPatientObjectifs'] = addPatientObjectifs;
	var removePatientObjectifs = $formulaireValeurs.find('.removePatientObjectifs').val();
	if(removePatientObjectifs != null && removePatientObjectifs !== '')
		vals['removePatientObjectifs'] = removePatientObjectifs;

	var valeurPatientCle = $formulaireValeurs.find('input.valeurPatientCle:checked').val();
	if(valeurPatientCle != null && valeurPatientCle !== '')
		vals['setPatientCle'] = valeurPatientCle;

	var valeurUtilisateurCles = $formulaireValeurs.find('input.valeurUtilisateurCles:checked').val();
	if(valeurUtilisateurCles != null && valeurUtilisateurCles !== '')
		vals['addUtilisateurCles'] = valeurUtilisateurCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
	var removeInheritPk = $formulaireFiltres.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formulaireValeurs.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formulaireValeurs.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formulaireValeurs.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
	var removeSessionId = $formulaireFiltres.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formulaireValeurs.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formulaireValeurs.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formulaireValeurs.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
	var removeUtilisateurId = $formulaireFiltres.find('.removeUtilisateurId').val() === 'true';
	var setUtilisateurId = removeUtilisateurId ? null : $formulaireValeurs.find('.setUtilisateurId').val();
	if(removeUtilisateurId || setUtilisateurId != null && setUtilisateurId !== '')
		vals['setUtilisateurId'] = setUtilisateurId;
	var addUtilisateurId = $formulaireValeurs.find('.addUtilisateurId').val();
	if(addUtilisateurId != null && addUtilisateurId !== '')
		vals['addUtilisateurId'] = addUtilisateurId;
	var removeUtilisateurId = $formulaireValeurs.find('.removeUtilisateurId').val();
	if(removeUtilisateurId != null && removeUtilisateurId !== '')
		vals['removeUtilisateurId'] = removeUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
	var removeUtilisateurCle = $formulaireFiltres.find('.removeUtilisateurCle').val() === 'true';
	var setUtilisateurCle = removeUtilisateurCle ? null : $formulaireValeurs.find('.setUtilisateurCle').val();
	if(removeUtilisateurCle || setUtilisateurCle != null && setUtilisateurCle !== '')
		vals['setUtilisateurCle'] = setUtilisateurCle;
	var addUtilisateurCle = $formulaireValeurs.find('.addUtilisateurCle').val();
	if(addUtilisateurCle != null && addUtilisateurCle !== '')
		vals['addUtilisateurCle'] = addUtilisateurCle;
	var removeUtilisateurCle = $formulaireValeurs.find('.removeUtilisateurCle').val();
	if(removeUtilisateurCle != null && removeUtilisateurCle !== '')
		vals['removeUtilisateurCle'] = removeUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
	var removeObjetTitre = $formulaireFiltres.find('.removeObjetTitre').val() === 'true';
	var setObjetTitre = removeObjetTitre ? null : $formulaireValeurs.find('.setObjetTitre').val();
	if(removeObjetTitre || setObjetTitre != null && setObjetTitre !== '')
		vals['setObjetTitre'] = setObjetTitre;
	var addObjetTitre = $formulaireValeurs.find('.addObjetTitre').val();
	if(addObjetTitre != null && addObjetTitre !== '')
		vals['addObjetTitre'] = addObjetTitre;
	var removeObjetTitre = $formulaireValeurs.find('.removeObjetTitre').val();
	if(removeObjetTitre != null && removeObjetTitre !== '')
		vals['removeObjetTitre'] = removeObjetTitre;

	var valeurPatientNomComplet = $formulaireValeurs.find('.valeurPatientNomComplet').val();
	if(valeurPatientNomComplet != null && valeurPatientNomComplet !== '')
	var removePatientNomComplet = $formulaireFiltres.find('.removePatientNomComplet').val() === 'true';
	var setPatientNomComplet = removePatientNomComplet ? null : $formulaireValeurs.find('.setPatientNomComplet').val();
	if(removePatientNomComplet || setPatientNomComplet != null && setPatientNomComplet !== '')
		vals['setPatientNomComplet'] = setPatientNomComplet;
	var addPatientNomComplet = $formulaireValeurs.find('.addPatientNomComplet').val();
	if(addPatientNomComplet != null && addPatientNomComplet !== '')
		vals['addPatientNomComplet'] = addPatientNomComplet;
	var removePatientNomComplet = $formulaireValeurs.find('.removePatientNomComplet').val();
	if(removePatientNomComplet != null && removePatientNomComplet !== '')
		vals['removePatientNomComplet'] = removePatientNomComplet;

	var valeurPatientNomCompletPrefere = $formulaireValeurs.find('.valeurPatientNomCompletPrefere').val();
	if(valeurPatientNomCompletPrefere != null && valeurPatientNomCompletPrefere !== '')
	var removePatientNomCompletPrefere = $formulaireFiltres.find('.removePatientNomCompletPrefere').val() === 'true';
	var setPatientNomCompletPrefere = removePatientNomCompletPrefere ? null : $formulaireValeurs.find('.setPatientNomCompletPrefere').val();
	if(removePatientNomCompletPrefere || setPatientNomCompletPrefere != null && setPatientNomCompletPrefere !== '')
		vals['setPatientNomCompletPrefere'] = setPatientNomCompletPrefere;
	var addPatientNomCompletPrefere = $formulaireValeurs.find('.addPatientNomCompletPrefere').val();
	if(addPatientNomCompletPrefere != null && addPatientNomCompletPrefere !== '')
		vals['addPatientNomCompletPrefere'] = addPatientNomCompletPrefere;
	var removePatientNomCompletPrefere = $formulaireValeurs.find('.removePatientNomCompletPrefere').val();
	if(removePatientNomCompletPrefere != null && removePatientNomCompletPrefere !== '')
		vals['removePatientNomCompletPrefere'] = removePatientNomCompletPrefere;

	var valeurPatientDateNaissance = $formulaireValeurs.find('.valeurPatientDateNaissance').val();
	if(valeurPatientDateNaissance != null && valeurPatientDateNaissance !== '')
	var removePatientDateNaissance = $formulaireFiltres.find('.removePatientDateNaissance').val() === 'true';
	var setPatientDateNaissance = removePatientDateNaissance ? null : $formulaireValeurs.find('.setPatientDateNaissance').val();
	if(removePatientDateNaissance || setPatientDateNaissance != null && setPatientDateNaissance !== '')
		vals['setPatientDateNaissance'] = setPatientDateNaissance;
	var addPatientDateNaissance = $formulaireValeurs.find('.addPatientDateNaissance').val();
	if(addPatientDateNaissance != null && addPatientDateNaissance !== '')
		vals['addPatientDateNaissance'] = addPatientDateNaissance;
	var removePatientDateNaissance = $formulaireValeurs.find('.removePatientDateNaissance').val();
	if(removePatientDateNaissance != null && removePatientDateNaissance !== '')
		vals['removePatientDateNaissance'] = removePatientDateNaissance;

	var valeurCliniqueAddresse = $formulaireValeurs.find('.valeurCliniqueAddresse').val();
	if(valeurCliniqueAddresse != null && valeurCliniqueAddresse !== '')
	var removeCliniqueAddresse = $formulaireFiltres.find('.removeCliniqueAddresse').val() === 'true';
	var setCliniqueAddresse = removeCliniqueAddresse ? null : $formulaireValeurs.find('.setCliniqueAddresse').val();
	if(removeCliniqueAddresse || setCliniqueAddresse != null && setCliniqueAddresse !== '')
		vals['setCliniqueAddresse'] = setCliniqueAddresse;
	var addCliniqueAddresse = $formulaireValeurs.find('.addCliniqueAddresse').val();
	if(addCliniqueAddresse != null && addCliniqueAddresse !== '')
		vals['addCliniqueAddresse'] = addCliniqueAddresse;
	var removeCliniqueAddresse = $formulaireValeurs.find('.removeCliniqueAddresse').val();
	if(removeCliniqueAddresse != null && removeCliniqueAddresse !== '')
		vals['removeCliniqueAddresse'] = removeCliniqueAddresse;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
	var removeCustomerProfileId = $formulaireFiltres.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formulaireValeurs.find('.setCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	var addCustomerProfileId = $formulaireValeurs.find('.addCustomerProfileId').val();
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formulaireValeurs.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valeurInscriptionSignature1 = $formulaireValeurs.find('.valeurInscriptionSignature1').val();
	if(valeurInscriptionSignature1 != null && valeurInscriptionSignature1 !== '')
	var removeInscriptionSignature1 = $formulaireFiltres.find('.removeInscriptionSignature1').val() === 'true';
	var setInscriptionSignature1 = removeInscriptionSignature1 ? null : $formulaireValeurs.find('.setInscriptionSignature1').val();
	if(removeInscriptionSignature1 || setInscriptionSignature1 != null && setInscriptionSignature1 !== '')
		vals['setInscriptionSignature1'] = setInscriptionSignature1;
	var addInscriptionSignature1 = $formulaireValeurs.find('.addInscriptionSignature1').val();
	if(addInscriptionSignature1 != null && addInscriptionSignature1 !== '')
		vals['addInscriptionSignature1'] = addInscriptionSignature1;
	var removeInscriptionSignature1 = $formulaireValeurs.find('.removeInscriptionSignature1').val();
	if(removeInscriptionSignature1 != null && removeInscriptionSignature1 !== '')
		vals['removeInscriptionSignature1'] = removeInscriptionSignature1;

	var valeurInscriptionSignature2 = $formulaireValeurs.find('.valeurInscriptionSignature2').val();
	if(valeurInscriptionSignature2 != null && valeurInscriptionSignature2 !== '')
	var removeInscriptionSignature2 = $formulaireFiltres.find('.removeInscriptionSignature2').val() === 'true';
	var setInscriptionSignature2 = removeInscriptionSignature2 ? null : $formulaireValeurs.find('.setInscriptionSignature2').val();
	if(removeInscriptionSignature2 || setInscriptionSignature2 != null && setInscriptionSignature2 !== '')
		vals['setInscriptionSignature2'] = setInscriptionSignature2;
	var addInscriptionSignature2 = $formulaireValeurs.find('.addInscriptionSignature2').val();
	if(addInscriptionSignature2 != null && addInscriptionSignature2 !== '')
		vals['addInscriptionSignature2'] = addInscriptionSignature2;
	var removeInscriptionSignature2 = $formulaireValeurs.find('.removeInscriptionSignature2').val();
	if(removeInscriptionSignature2 != null && removeInscriptionSignature2 !== '')
		vals['removeInscriptionSignature2'] = removeInscriptionSignature2;

	var valeurInscriptionSignature3 = $formulaireValeurs.find('.valeurInscriptionSignature3').val();
	if(valeurInscriptionSignature3 != null && valeurInscriptionSignature3 !== '')
	var removeInscriptionSignature3 = $formulaireFiltres.find('.removeInscriptionSignature3').val() === 'true';
	var setInscriptionSignature3 = removeInscriptionSignature3 ? null : $formulaireValeurs.find('.setInscriptionSignature3').val();
	if(removeInscriptionSignature3 || setInscriptionSignature3 != null && setInscriptionSignature3 !== '')
		vals['setInscriptionSignature3'] = setInscriptionSignature3;
	var addInscriptionSignature3 = $formulaireValeurs.find('.addInscriptionSignature3').val();
	if(addInscriptionSignature3 != null && addInscriptionSignature3 !== '')
		vals['addInscriptionSignature3'] = addInscriptionSignature3;
	var removeInscriptionSignature3 = $formulaireValeurs.find('.removeInscriptionSignature3').val();
	if(removeInscriptionSignature3 != null && removeInscriptionSignature3 !== '')
		vals['removeInscriptionSignature3'] = removeInscriptionSignature3;

	var valeurInscriptionSignature4 = $formulaireValeurs.find('.valeurInscriptionSignature4').val();
	if(valeurInscriptionSignature4 != null && valeurInscriptionSignature4 !== '')
	var removeInscriptionSignature4 = $formulaireFiltres.find('.removeInscriptionSignature4').val() === 'true';
	var setInscriptionSignature4 = removeInscriptionSignature4 ? null : $formulaireValeurs.find('.setInscriptionSignature4').val();
	if(removeInscriptionSignature4 || setInscriptionSignature4 != null && setInscriptionSignature4 !== '')
		vals['setInscriptionSignature4'] = setInscriptionSignature4;
	var addInscriptionSignature4 = $formulaireValeurs.find('.addInscriptionSignature4').val();
	if(addInscriptionSignature4 != null && addInscriptionSignature4 !== '')
		vals['addInscriptionSignature4'] = addInscriptionSignature4;
	var removeInscriptionSignature4 = $formulaireValeurs.find('.removeInscriptionSignature4').val();
	if(removeInscriptionSignature4 != null && removeInscriptionSignature4 !== '')
		vals['removeInscriptionSignature4'] = removeInscriptionSignature4;

	var valeurInscriptionSignature5 = $formulaireValeurs.find('.valeurInscriptionSignature5').val();
	if(valeurInscriptionSignature5 != null && valeurInscriptionSignature5 !== '')
	var removeInscriptionSignature5 = $formulaireFiltres.find('.removeInscriptionSignature5').val() === 'true';
	var setInscriptionSignature5 = removeInscriptionSignature5 ? null : $formulaireValeurs.find('.setInscriptionSignature5').val();
	if(removeInscriptionSignature5 || setInscriptionSignature5 != null && setInscriptionSignature5 !== '')
		vals['setInscriptionSignature5'] = setInscriptionSignature5;
	var addInscriptionSignature5 = $formulaireValeurs.find('.addInscriptionSignature5').val();
	if(addInscriptionSignature5 != null && addInscriptionSignature5 !== '')
		vals['addInscriptionSignature5'] = addInscriptionSignature5;
	var removeInscriptionSignature5 = $formulaireValeurs.find('.removeInscriptionSignature5').val();
	if(removeInscriptionSignature5 != null && removeInscriptionSignature5 !== '')
		vals['removeInscriptionSignature5'] = removeInscriptionSignature5;

	var valeurInscriptionSignature6 = $formulaireValeurs.find('.valeurInscriptionSignature6').val();
	if(valeurInscriptionSignature6 != null && valeurInscriptionSignature6 !== '')
	var removeInscriptionSignature6 = $formulaireFiltres.find('.removeInscriptionSignature6').val() === 'true';
	var setInscriptionSignature6 = removeInscriptionSignature6 ? null : $formulaireValeurs.find('.setInscriptionSignature6').val();
	if(removeInscriptionSignature6 || setInscriptionSignature6 != null && setInscriptionSignature6 !== '')
		vals['setInscriptionSignature6'] = setInscriptionSignature6;
	var addInscriptionSignature6 = $formulaireValeurs.find('.addInscriptionSignature6').val();
	if(addInscriptionSignature6 != null && addInscriptionSignature6 !== '')
		vals['addInscriptionSignature6'] = addInscriptionSignature6;
	var removeInscriptionSignature6 = $formulaireValeurs.find('.removeInscriptionSignature6').val();
	if(removeInscriptionSignature6 != null && removeInscriptionSignature6 !== '')
		vals['removeInscriptionSignature6'] = removeInscriptionSignature6;

	var valeurInscriptionSignature7 = $formulaireValeurs.find('.valeurInscriptionSignature7').val();
	if(valeurInscriptionSignature7 != null && valeurInscriptionSignature7 !== '')
	var removeInscriptionSignature7 = $formulaireFiltres.find('.removeInscriptionSignature7').val() === 'true';
	var setInscriptionSignature7 = removeInscriptionSignature7 ? null : $formulaireValeurs.find('.setInscriptionSignature7').val();
	if(removeInscriptionSignature7 || setInscriptionSignature7 != null && setInscriptionSignature7 !== '')
		vals['setInscriptionSignature7'] = setInscriptionSignature7;
	var addInscriptionSignature7 = $formulaireValeurs.find('.addInscriptionSignature7').val();
	if(addInscriptionSignature7 != null && addInscriptionSignature7 !== '')
		vals['addInscriptionSignature7'] = addInscriptionSignature7;
	var removeInscriptionSignature7 = $formulaireValeurs.find('.removeInscriptionSignature7').val();
	if(removeInscriptionSignature7 != null && removeInscriptionSignature7 !== '')
		vals['removeInscriptionSignature7'] = removeInscriptionSignature7;

	var valeurInscriptionSignature8 = $formulaireValeurs.find('.valeurInscriptionSignature8').val();
	if(valeurInscriptionSignature8 != null && valeurInscriptionSignature8 !== '')
	var removeInscriptionSignature8 = $formulaireFiltres.find('.removeInscriptionSignature8').val() === 'true';
	var setInscriptionSignature8 = removeInscriptionSignature8 ? null : $formulaireValeurs.find('.setInscriptionSignature8').val();
	if(removeInscriptionSignature8 || setInscriptionSignature8 != null && setInscriptionSignature8 !== '')
		vals['setInscriptionSignature8'] = setInscriptionSignature8;
	var addInscriptionSignature8 = $formulaireValeurs.find('.addInscriptionSignature8').val();
	if(addInscriptionSignature8 != null && addInscriptionSignature8 !== '')
		vals['addInscriptionSignature8'] = addInscriptionSignature8;
	var removeInscriptionSignature8 = $formulaireValeurs.find('.removeInscriptionSignature8').val();
	if(removeInscriptionSignature8 != null && removeInscriptionSignature8 !== '')
		vals['removeInscriptionSignature8'] = removeInscriptionSignature8;

	var valeurInscriptionSignature9 = $formulaireValeurs.find('.valeurInscriptionSignature9').val();
	if(valeurInscriptionSignature9 != null && valeurInscriptionSignature9 !== '')
	var removeInscriptionSignature9 = $formulaireFiltres.find('.removeInscriptionSignature9').val() === 'true';
	var setInscriptionSignature9 = removeInscriptionSignature9 ? null : $formulaireValeurs.find('.setInscriptionSignature9').val();
	if(removeInscriptionSignature9 || setInscriptionSignature9 != null && setInscriptionSignature9 !== '')
		vals['setInscriptionSignature9'] = setInscriptionSignature9;
	var addInscriptionSignature9 = $formulaireValeurs.find('.addInscriptionSignature9').val();
	if(addInscriptionSignature9 != null && addInscriptionSignature9 !== '')
		vals['addInscriptionSignature9'] = addInscriptionSignature9;
	var removeInscriptionSignature9 = $formulaireValeurs.find('.removeInscriptionSignature9').val();
	if(removeInscriptionSignature9 != null && removeInscriptionSignature9 !== '')
		vals['removeInscriptionSignature9'] = removeInscriptionSignature9;

	var valeurInscriptionSignature10 = $formulaireValeurs.find('.valeurInscriptionSignature10').val();
	if(valeurInscriptionSignature10 != null && valeurInscriptionSignature10 !== '')
	var removeInscriptionSignature10 = $formulaireFiltres.find('.removeInscriptionSignature10').val() === 'true';
	var setInscriptionSignature10 = removeInscriptionSignature10 ? null : $formulaireValeurs.find('.setInscriptionSignature10').val();
	if(removeInscriptionSignature10 || setInscriptionSignature10 != null && setInscriptionSignature10 !== '')
		vals['setInscriptionSignature10'] = setInscriptionSignature10;
	var addInscriptionSignature10 = $formulaireValeurs.find('.addInscriptionSignature10').val();
	if(addInscriptionSignature10 != null && addInscriptionSignature10 !== '')
		vals['addInscriptionSignature10'] = addInscriptionSignature10;
	var removeInscriptionSignature10 = $formulaireValeurs.find('.removeInscriptionSignature10').val();
	if(removeInscriptionSignature10 != null && removeInscriptionSignature10 !== '')
		vals['removeInscriptionSignature10'] = removeInscriptionSignature10;

	var valeurInscriptionDate1 = $formulaireValeurs.find('.valeurInscriptionDate1').val();
	if(valeurInscriptionDate1 != null && valeurInscriptionDate1 !== '')
	var removeInscriptionDate1 = $formulaireFiltres.find('.removeInscriptionDate1').val() === 'true';
	var setInscriptionDate1 = removeInscriptionDate1 ? null : $formulaireValeurs.find('.setInscriptionDate1').val();
	if(removeInscriptionDate1 || setInscriptionDate1 != null && setInscriptionDate1 !== '')
		vals['setInscriptionDate1'] = setInscriptionDate1;
	var addInscriptionDate1 = $formulaireValeurs.find('.addInscriptionDate1').val();
	if(addInscriptionDate1 != null && addInscriptionDate1 !== '')
		vals['addInscriptionDate1'] = addInscriptionDate1;
	var removeInscriptionDate1 = $formulaireValeurs.find('.removeInscriptionDate1').val();
	if(removeInscriptionDate1 != null && removeInscriptionDate1 !== '')
		vals['removeInscriptionDate1'] = removeInscriptionDate1;

	var valeurInscriptionDate2 = $formulaireValeurs.find('.valeurInscriptionDate2').val();
	if(valeurInscriptionDate2 != null && valeurInscriptionDate2 !== '')
	var removeInscriptionDate2 = $formulaireFiltres.find('.removeInscriptionDate2').val() === 'true';
	var setInscriptionDate2 = removeInscriptionDate2 ? null : $formulaireValeurs.find('.setInscriptionDate2').val();
	if(removeInscriptionDate2 || setInscriptionDate2 != null && setInscriptionDate2 !== '')
		vals['setInscriptionDate2'] = setInscriptionDate2;
	var addInscriptionDate2 = $formulaireValeurs.find('.addInscriptionDate2').val();
	if(addInscriptionDate2 != null && addInscriptionDate2 !== '')
		vals['addInscriptionDate2'] = addInscriptionDate2;
	var removeInscriptionDate2 = $formulaireValeurs.find('.removeInscriptionDate2').val();
	if(removeInscriptionDate2 != null && removeInscriptionDate2 !== '')
		vals['removeInscriptionDate2'] = removeInscriptionDate2;

	var valeurInscriptionDate3 = $formulaireValeurs.find('.valeurInscriptionDate3').val();
	if(valeurInscriptionDate3 != null && valeurInscriptionDate3 !== '')
	var removeInscriptionDate3 = $formulaireFiltres.find('.removeInscriptionDate3').val() === 'true';
	var setInscriptionDate3 = removeInscriptionDate3 ? null : $formulaireValeurs.find('.setInscriptionDate3').val();
	if(removeInscriptionDate3 || setInscriptionDate3 != null && setInscriptionDate3 !== '')
		vals['setInscriptionDate3'] = setInscriptionDate3;
	var addInscriptionDate3 = $formulaireValeurs.find('.addInscriptionDate3').val();
	if(addInscriptionDate3 != null && addInscriptionDate3 !== '')
		vals['addInscriptionDate3'] = addInscriptionDate3;
	var removeInscriptionDate3 = $formulaireValeurs.find('.removeInscriptionDate3').val();
	if(removeInscriptionDate3 != null && removeInscriptionDate3 !== '')
		vals['removeInscriptionDate3'] = removeInscriptionDate3;

	var valeurInscriptionDate4 = $formulaireValeurs.find('.valeurInscriptionDate4').val();
	if(valeurInscriptionDate4 != null && valeurInscriptionDate4 !== '')
	var removeInscriptionDate4 = $formulaireFiltres.find('.removeInscriptionDate4').val() === 'true';
	var setInscriptionDate4 = removeInscriptionDate4 ? null : $formulaireValeurs.find('.setInscriptionDate4').val();
	if(removeInscriptionDate4 || setInscriptionDate4 != null && setInscriptionDate4 !== '')
		vals['setInscriptionDate4'] = setInscriptionDate4;
	var addInscriptionDate4 = $formulaireValeurs.find('.addInscriptionDate4').val();
	if(addInscriptionDate4 != null && addInscriptionDate4 !== '')
		vals['addInscriptionDate4'] = addInscriptionDate4;
	var removeInscriptionDate4 = $formulaireValeurs.find('.removeInscriptionDate4').val();
	if(removeInscriptionDate4 != null && removeInscriptionDate4 !== '')
		vals['removeInscriptionDate4'] = removeInscriptionDate4;

	var valeurInscriptionDate5 = $formulaireValeurs.find('.valeurInscriptionDate5').val();
	if(valeurInscriptionDate5 != null && valeurInscriptionDate5 !== '')
	var removeInscriptionDate5 = $formulaireFiltres.find('.removeInscriptionDate5').val() === 'true';
	var setInscriptionDate5 = removeInscriptionDate5 ? null : $formulaireValeurs.find('.setInscriptionDate5').val();
	if(removeInscriptionDate5 || setInscriptionDate5 != null && setInscriptionDate5 !== '')
		vals['setInscriptionDate5'] = setInscriptionDate5;
	var addInscriptionDate5 = $formulaireValeurs.find('.addInscriptionDate5').val();
	if(addInscriptionDate5 != null && addInscriptionDate5 !== '')
		vals['addInscriptionDate5'] = addInscriptionDate5;
	var removeInscriptionDate5 = $formulaireValeurs.find('.removeInscriptionDate5').val();
	if(removeInscriptionDate5 != null && removeInscriptionDate5 !== '')
		vals['removeInscriptionDate5'] = removeInscriptionDate5;

	var valeurInscriptionDate6 = $formulaireValeurs.find('.valeurInscriptionDate6').val();
	if(valeurInscriptionDate6 != null && valeurInscriptionDate6 !== '')
	var removeInscriptionDate6 = $formulaireFiltres.find('.removeInscriptionDate6').val() === 'true';
	var setInscriptionDate6 = removeInscriptionDate6 ? null : $formulaireValeurs.find('.setInscriptionDate6').val();
	if(removeInscriptionDate6 || setInscriptionDate6 != null && setInscriptionDate6 !== '')
		vals['setInscriptionDate6'] = setInscriptionDate6;
	var addInscriptionDate6 = $formulaireValeurs.find('.addInscriptionDate6').val();
	if(addInscriptionDate6 != null && addInscriptionDate6 !== '')
		vals['addInscriptionDate6'] = addInscriptionDate6;
	var removeInscriptionDate6 = $formulaireValeurs.find('.removeInscriptionDate6').val();
	if(removeInscriptionDate6 != null && removeInscriptionDate6 !== '')
		vals['removeInscriptionDate6'] = removeInscriptionDate6;

	var valeurInscriptionDate7 = $formulaireValeurs.find('.valeurInscriptionDate7').val();
	if(valeurInscriptionDate7 != null && valeurInscriptionDate7 !== '')
	var removeInscriptionDate7 = $formulaireFiltres.find('.removeInscriptionDate7').val() === 'true';
	var setInscriptionDate7 = removeInscriptionDate7 ? null : $formulaireValeurs.find('.setInscriptionDate7').val();
	if(removeInscriptionDate7 || setInscriptionDate7 != null && setInscriptionDate7 !== '')
		vals['setInscriptionDate7'] = setInscriptionDate7;
	var addInscriptionDate7 = $formulaireValeurs.find('.addInscriptionDate7').val();
	if(addInscriptionDate7 != null && addInscriptionDate7 !== '')
		vals['addInscriptionDate7'] = addInscriptionDate7;
	var removeInscriptionDate7 = $formulaireValeurs.find('.removeInscriptionDate7').val();
	if(removeInscriptionDate7 != null && removeInscriptionDate7 !== '')
		vals['removeInscriptionDate7'] = removeInscriptionDate7;

	var valeurInscriptionDate8 = $formulaireValeurs.find('.valeurInscriptionDate8').val();
	if(valeurInscriptionDate8 != null && valeurInscriptionDate8 !== '')
	var removeInscriptionDate8 = $formulaireFiltres.find('.removeInscriptionDate8').val() === 'true';
	var setInscriptionDate8 = removeInscriptionDate8 ? null : $formulaireValeurs.find('.setInscriptionDate8').val();
	if(removeInscriptionDate8 || setInscriptionDate8 != null && setInscriptionDate8 !== '')
		vals['setInscriptionDate8'] = setInscriptionDate8;
	var addInscriptionDate8 = $formulaireValeurs.find('.addInscriptionDate8').val();
	if(addInscriptionDate8 != null && addInscriptionDate8 !== '')
		vals['addInscriptionDate8'] = addInscriptionDate8;
	var removeInscriptionDate8 = $formulaireValeurs.find('.removeInscriptionDate8').val();
	if(removeInscriptionDate8 != null && removeInscriptionDate8 !== '')
		vals['removeInscriptionDate8'] = removeInscriptionDate8;

	var valeurInscriptionDate9 = $formulaireValeurs.find('.valeurInscriptionDate9').val();
	if(valeurInscriptionDate9 != null && valeurInscriptionDate9 !== '')
	var removeInscriptionDate9 = $formulaireFiltres.find('.removeInscriptionDate9').val() === 'true';
	var setInscriptionDate9 = removeInscriptionDate9 ? null : $formulaireValeurs.find('.setInscriptionDate9').val();
	if(removeInscriptionDate9 || setInscriptionDate9 != null && setInscriptionDate9 !== '')
		vals['setInscriptionDate9'] = setInscriptionDate9;
	var addInscriptionDate9 = $formulaireValeurs.find('.addInscriptionDate9').val();
	if(addInscriptionDate9 != null && addInscriptionDate9 !== '')
		vals['addInscriptionDate9'] = addInscriptionDate9;
	var removeInscriptionDate9 = $formulaireValeurs.find('.removeInscriptionDate9').val();
	if(removeInscriptionDate9 != null && removeInscriptionDate9 !== '')
		vals['removeInscriptionDate9'] = removeInscriptionDate9;

	var valeurInscriptionDate10 = $formulaireValeurs.find('.valeurInscriptionDate10').val();
	if(valeurInscriptionDate10 != null && valeurInscriptionDate10 !== '')
	var removeInscriptionDate10 = $formulaireFiltres.find('.removeInscriptionDate10').val() === 'true';
	var setInscriptionDate10 = removeInscriptionDate10 ? null : $formulaireValeurs.find('.setInscriptionDate10').val();
	if(removeInscriptionDate10 || setInscriptionDate10 != null && setInscriptionDate10 !== '')
		vals['setInscriptionDate10'] = setInscriptionDate10;
	var addInscriptionDate10 = $formulaireValeurs.find('.addInscriptionDate10').val();
	if(addInscriptionDate10 != null && addInscriptionDate10 !== '')
		vals['addInscriptionDate10'] = addInscriptionDate10;
	var removeInscriptionDate10 = $formulaireValeurs.find('.removeInscriptionDate10').val();
	if(removeInscriptionDate10 != null && removeInscriptionDate10 !== '')
		vals['removeInscriptionDate10'] = removeInscriptionDate10;

	patchInscriptionMedicaleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchInscriptionMedicaleFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePk = $formulaireFiltres.find('.valeurPk').val();
		if(filtrePk != null && filtrePk !== '')
			filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

		var filtreCree = $formulaireFiltres.find('.valeurCree').val();
		if(filtreCree != null && filtreCree !== '')
			filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

		var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
		if(filtreModifie != null && filtreModifie !== '')
			filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

		var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
		if(filtreObjetId != null && filtreObjetId !== '')
			filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

		var $filtreArchiveCheckbox = $formulaireFiltres.find('input.valeurArchive[type = "checkbox"]');
		var $filtreArchiveSelect = $formulaireFiltres.find('select.valeurArchive');
		var filtreArchive = $filtreArchiveSelect.length ? $filtreArchiveSelect.val() : $filtreArchiveCheckbox.prop('checked');
		var filtreArchiveSelectVal = $formulaireFiltres.find('select.filtreArchive').val();
		var filtreArchive = null;
		if(filtreArchiveSelectVal !== '')
			filtreArchive = filtreArchiveSelectVal == 'true';
		if(filtreArchive != null && filtreArchive === true)
			filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

		var $filtreSupprimeCheckbox = $formulaireFiltres.find('input.valeurSupprime[type = "checkbox"]');
		var $filtreSupprimeSelect = $formulaireFiltres.find('select.valeurSupprime');
		var filtreSupprime = $filtreSupprimeSelect.length ? $filtreSupprimeSelect.val() : $filtreSupprimeCheckbox.prop('checked');
		var filtreSupprimeSelectVal = $formulaireFiltres.find('select.filtreSupprime').val();
		var filtreSupprime = null;
		if(filtreSupprimeSelectVal !== '')
			filtreSupprime = filtreSupprimeSelectVal == 'true';
		if(filtreSupprime != null && filtreSupprime === true)
			filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var filtreFamilleAddresse = $formulaireFiltres.find('.valeurFamilleAddresse').val();
		if(filtreFamilleAddresse != null && filtreFamilleAddresse !== '')
			filtres.push({ name: 'fq', value: 'familleAddresse:' + filtreFamilleAddresse });

		var filtreInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.valeurInscriptionConsiderationsSpeciales').val();
		if(filtreInscriptionConsiderationsSpeciales != null && filtreInscriptionConsiderationsSpeciales !== '')
			filtres.push({ name: 'fq', value: 'inscriptionConsiderationsSpeciales:' + filtreInscriptionConsiderationsSpeciales });

		var filtrePatientConditionsMedicales = $formulaireFiltres.find('.valeurPatientConditionsMedicales').val();
		if(filtrePatientConditionsMedicales != null && filtrePatientConditionsMedicales !== '')
			filtres.push({ name: 'fq', value: 'patientConditionsMedicales:' + filtrePatientConditionsMedicales });

		var filtrePatientCliniquesPrecedemmentFrequentees = $formulaireFiltres.find('.valeurPatientCliniquesPrecedemmentFrequentees').val();
		if(filtrePatientCliniquesPrecedemmentFrequentees != null && filtrePatientCliniquesPrecedemmentFrequentees !== '')
			filtres.push({ name: 'fq', value: 'patientCliniquesPrecedemmentFrequentees:' + filtrePatientCliniquesPrecedemmentFrequentees });

		var filtreFamilleCommentVousConnaissezClinique = $formulaireFiltres.find('.valeurFamilleCommentVousConnaissezClinique').val();
		if(filtreFamilleCommentVousConnaissezClinique != null && filtreFamilleCommentVousConnaissezClinique !== '')
			filtres.push({ name: 'fq', value: 'familleCommentVousConnaissezClinique:' + filtreFamilleCommentVousConnaissezClinique });

		var filtrePatientDescription = $formulaireFiltres.find('.valeurPatientDescription').val();
		if(filtrePatientDescription != null && filtrePatientDescription !== '')
			filtres.push({ name: 'fq', value: 'patientDescription:' + filtrePatientDescription });

		var filtrePatientObjectifs = $formulaireFiltres.find('.valeurPatientObjectifs').val();
		if(filtrePatientObjectifs != null && filtrePatientObjectifs !== '')
			filtres.push({ name: 'fq', value: 'patientObjectifs:' + filtrePatientObjectifs });

		var filtrePatientCle = $formulaireFiltres.find('.valeurPatientCle').val();
		if(filtrePatientCle != null && filtrePatientCle !== '')
			filtres.push({ name: 'fq', value: 'patientCle:' + filtrePatientCle });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreInheritPk = $formulaireFiltres.find('.valeurInheritPk').val();
		if(filtreInheritPk != null && filtreInheritPk !== '')
			filtres.push({ name: 'fq', value: 'inheritPk:' + filtreInheritPk });

		var filtreId = $formulaireFiltres.find('.valeurId').val();
		if(filtreId != null && filtreId !== '')
			filtres.push({ name: 'fq', value: 'id:' + filtreId });

		var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
		if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
			filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

		var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
		if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
			filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

		var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
		if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
			filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

		var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
		if(filtreSessionId != null && filtreSessionId !== '')
			filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

		var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
		if(filtreSauvegardes != null && filtreSauvegardes !== '')
			filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

		var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
		if(filtreObjetTitre != null && filtreObjetTitre !== '')
			filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

		var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
		if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
			filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtreInscriptionCle = $formulaireFiltres.find('.valeurInscriptionCle').val();
		if(filtreInscriptionCle != null && filtreInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCle:' + filtreInscriptionCle });

		var filtreCliniqueCle = $formulaireFiltres.find('.valeurCliniqueCle').val();
		if(filtreCliniqueCle != null && filtreCliniqueCle !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCle:' + filtreCliniqueCle });

		var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
		if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

		var filtreMedicaleTri = $formulaireFiltres.find('.valeurMedicaleTri').val();
		if(filtreMedicaleTri != null && filtreMedicaleTri !== '')
			filtres.push({ name: 'fq', value: 'medicaleTri:' + filtreMedicaleTri });

		var filtreCliniqueTri = $formulaireFiltres.find('.valeurCliniqueTri').val();
		if(filtreCliniqueTri != null && filtreCliniqueTri !== '')
			filtres.push({ name: 'fq', value: 'cliniqueTri:' + filtreCliniqueTri });

		var filtrePatientPrenom = $formulaireFiltres.find('.valeurPatientPrenom').val();
		if(filtrePatientPrenom != null && filtrePatientPrenom !== '')
			filtres.push({ name: 'fq', value: 'patientPrenom:' + filtrePatientPrenom });

		var filtrePatientPrenomPrefere = $formulaireFiltres.find('.valeurPatientPrenomPrefere').val();
		if(filtrePatientPrenomPrefere != null && filtrePatientPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientPrenomPrefere:' + filtrePatientPrenomPrefere });

		var filtrePatientFamilleNom = $formulaireFiltres.find('.valeurPatientFamilleNom').val();
		if(filtrePatientFamilleNom != null && filtrePatientFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'patientFamilleNom:' + filtrePatientFamilleNom });

		var filtrePatientNomComplet = $formulaireFiltres.find('.valeurPatientNomComplet').val();
		if(filtrePatientNomComplet != null && filtrePatientNomComplet !== '')
			filtres.push({ name: 'fq', value: 'patientNomComplet:' + filtrePatientNomComplet });

		var filtrePatientNomCompletPrefere = $formulaireFiltres.find('.valeurPatientNomCompletPrefere').val();
		if(filtrePatientNomCompletPrefere != null && filtrePatientNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientNomCompletPrefere:' + filtrePatientNomCompletPrefere });

		var filtrePatientDateNaissance = $formulaireFiltres.find('.valeurPatientDateNaissance').val();
		if(filtrePatientDateNaissance != null && filtrePatientDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissance:' + filtrePatientDateNaissance });

		var filtrePatientDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceDAnnee').val();
		if(filtrePatientDateNaissanceDAnnee != null && filtrePatientDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceDAnnee:' + filtrePatientDateNaissanceDAnnee });

		var filtrePatientDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceMoisDAnnee').val();
		if(filtrePatientDateNaissanceMoisDAnnee != null && filtrePatientDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceMoisDAnnee:' + filtrePatientDateNaissanceMoisDAnnee });

		var filtrePatientDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPatientDateNaissanceJourDeSemaine').val();
		if(filtrePatientDateNaissanceJourDeSemaine != null && filtrePatientDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceJourDeSemaine:' + filtrePatientDateNaissanceJourDeSemaine });

		var filtrePatientMoisNaissance = $formulaireFiltres.find('.valeurPatientMoisNaissance').val();
		if(filtrePatientMoisNaissance != null && filtrePatientMoisNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientMoisNaissance:' + filtrePatientMoisNaissance });

		var filtrePatientJourNaissance = $formulaireFiltres.find('.valeurPatientJourNaissance').val();
		if(filtrePatientJourNaissance != null && filtrePatientJourNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientJourNaissance:' + filtrePatientJourNaissance });

		var filtreCliniqueNom = $formulaireFiltres.find('.valeurCliniqueNom').val();
		if(filtreCliniqueNom != null && filtreCliniqueNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNom:' + filtreCliniqueNom });

		var filtreCliniqueNomComplet = $formulaireFiltres.find('.valeurCliniqueNomComplet').val();
		if(filtreCliniqueNomComplet != null && filtreCliniqueNomComplet !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNomComplet:' + filtreCliniqueNomComplet });

		var filtreCliniqueEmplacement = $formulaireFiltres.find('.valeurCliniqueEmplacement').val();
		if(filtreCliniqueEmplacement != null && filtreCliniqueEmplacement !== '')
			filtres.push({ name: 'fq', value: 'cliniqueEmplacement:' + filtreCliniqueEmplacement });

		var filtreCliniqueAddresse = $formulaireFiltres.find('.valeurCliniqueAddresse').val();
		if(filtreCliniqueAddresse != null && filtreCliniqueAddresse !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAddresse:' + filtreCliniqueAddresse });

		var filtreCliniqueNumeroTelephone = $formulaireFiltres.find('.valeurCliniqueNumeroTelephone').val();
		if(filtreCliniqueNumeroTelephone != null && filtreCliniqueNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNumeroTelephone:' + filtreCliniqueNumeroTelephone });

		var filtreCliniqueAdministrateurNom = $formulaireFiltres.find('.valeurCliniqueAdministrateurNom').val();
		if(filtreCliniqueAdministrateurNom != null && filtreCliniqueAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAdministrateurNom:' + filtreCliniqueAdministrateurNom });

		var filtreCustomerProfileId = $formulaireFiltres.find('.valeurCustomerProfileId').val();
		if(filtreCustomerProfileId != null && filtreCustomerProfileId !== '')
			filtres.push({ name: 'fq', value: 'customerProfileId:' + filtreCustomerProfileId });

		var filtreCreeDAnnee = $formulaireFiltres.find('.valeurCreeDAnnee').val();
		if(filtreCreeDAnnee != null && filtreCreeDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeDAnnee:' + filtreCreeDAnnee });

		var filtreCreeJourDeSemaine = $formulaireFiltres.find('.valeurCreeJourDeSemaine').val();
		if(filtreCreeJourDeSemaine != null && filtreCreeJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'creeJourDeSemaine:' + filtreCreeJourDeSemaine });

		var filtreCreeMoisDAnnee = $formulaireFiltres.find('.valeurCreeMoisDAnnee').val();
		if(filtreCreeMoisDAnnee != null && filtreCreeMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeMoisDAnnee:' + filtreCreeMoisDAnnee });

		var filtreCreeHeureDuJour = $formulaireFiltres.find('.valeurCreeHeureDuJour').val();
		if(filtreCreeHeureDuJour != null && filtreCreeHeureDuJour !== '')
			filtres.push({ name: 'fq', value: 'creeHeureDuJour:' + filtreCreeHeureDuJour });

		var filtreInscriptionDate1 = $formulaireFiltres.find('.valeurInscriptionDate1').val();
		if(filtreInscriptionDate1 != null && filtreInscriptionDate1 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate1:' + filtreInscriptionDate1 });

		var filtreInscriptionDate2 = $formulaireFiltres.find('.valeurInscriptionDate2').val();
		if(filtreInscriptionDate2 != null && filtreInscriptionDate2 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate2:' + filtreInscriptionDate2 });

		var filtreInscriptionDate3 = $formulaireFiltres.find('.valeurInscriptionDate3').val();
		if(filtreInscriptionDate3 != null && filtreInscriptionDate3 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate3:' + filtreInscriptionDate3 });

		var filtreInscriptionDate4 = $formulaireFiltres.find('.valeurInscriptionDate4').val();
		if(filtreInscriptionDate4 != null && filtreInscriptionDate4 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate4:' + filtreInscriptionDate4 });

		var filtreInscriptionDate5 = $formulaireFiltres.find('.valeurInscriptionDate5').val();
		if(filtreInscriptionDate5 != null && filtreInscriptionDate5 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate5:' + filtreInscriptionDate5 });

		var filtreInscriptionDate6 = $formulaireFiltres.find('.valeurInscriptionDate6').val();
		if(filtreInscriptionDate6 != null && filtreInscriptionDate6 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate6:' + filtreInscriptionDate6 });

		var filtreInscriptionDate7 = $formulaireFiltres.find('.valeurInscriptionDate7').val();
		if(filtreInscriptionDate7 != null && filtreInscriptionDate7 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate7:' + filtreInscriptionDate7 });

		var filtreInscriptionDate8 = $formulaireFiltres.find('.valeurInscriptionDate8').val();
		if(filtreInscriptionDate8 != null && filtreInscriptionDate8 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate8:' + filtreInscriptionDate8 });

		var filtreInscriptionDate9 = $formulaireFiltres.find('.valeurInscriptionDate9').val();
		if(filtreInscriptionDate9 != null && filtreInscriptionDate9 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate9:' + filtreInscriptionDate9 });

		var filtreInscriptionDate10 = $formulaireFiltres.find('.valeurInscriptionDate10').val();
		if(filtreInscriptionDate10 != null && filtreInscriptionDate10 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate10:' + filtreInscriptionDate10 });

		var filtreInscriptionNomComplet = $formulaireFiltres.find('.valeurInscriptionNomComplet').val();
		if(filtreInscriptionNomComplet != null && filtreInscriptionNomComplet !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomComplet:' + filtreInscriptionNomComplet });
	}
	return filtres;
}

function patchInscriptionMedicaleVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchInscriptionMedicaleVals(filtres, vals, success, error);
}

function patchInscriptionMedicaleVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getInscriptionMedicale(pk) {
	$.ajax({
		url: '/api/inscription/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheInscriptionMedicale($formulaireFiltres, success, error) {
	var filtres = rechercheInscriptionMedicaleFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheInscriptionMedicaleVals(filtres, success, error);
}

function rechercheInscriptionMedicaleFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePk = $formulaireFiltres.find('.valeurPk').val();
		if(filtrePk != null && filtrePk !== '')
			filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

		var filtreCree = $formulaireFiltres.find('.valeurCree').val();
		if(filtreCree != null && filtreCree !== '')
			filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

		var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
		if(filtreModifie != null && filtreModifie !== '')
			filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

		var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
		if(filtreObjetId != null && filtreObjetId !== '')
			filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

		var $filtreArchiveCheckbox = $formulaireFiltres.find('input.valeurArchive[type = "checkbox"]');
		var $filtreArchiveSelect = $formulaireFiltres.find('select.valeurArchive');
		var filtreArchive = $filtreArchiveSelect.length ? $filtreArchiveSelect.val() : $filtreArchiveCheckbox.prop('checked');
		var filtreArchiveSelectVal = $formulaireFiltres.find('select.filtreArchive').val();
		var filtreArchive = null;
		if(filtreArchiveSelectVal !== '')
			filtreArchive = filtreArchiveSelectVal == 'true';
		if(filtreArchive != null && filtreArchive === true)
			filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

		var $filtreSupprimeCheckbox = $formulaireFiltres.find('input.valeurSupprime[type = "checkbox"]');
		var $filtreSupprimeSelect = $formulaireFiltres.find('select.valeurSupprime');
		var filtreSupprime = $filtreSupprimeSelect.length ? $filtreSupprimeSelect.val() : $filtreSupprimeCheckbox.prop('checked');
		var filtreSupprimeSelectVal = $formulaireFiltres.find('select.filtreSupprime').val();
		var filtreSupprime = null;
		if(filtreSupprimeSelectVal !== '')
			filtreSupprime = filtreSupprimeSelectVal == 'true';
		if(filtreSupprime != null && filtreSupprime === true)
			filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var filtreFamilleAddresse = $formulaireFiltres.find('.valeurFamilleAddresse').val();
		if(filtreFamilleAddresse != null && filtreFamilleAddresse !== '')
			filtres.push({ name: 'fq', value: 'familleAddresse:' + filtreFamilleAddresse });

		var filtreInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.valeurInscriptionConsiderationsSpeciales').val();
		if(filtreInscriptionConsiderationsSpeciales != null && filtreInscriptionConsiderationsSpeciales !== '')
			filtres.push({ name: 'fq', value: 'inscriptionConsiderationsSpeciales:' + filtreInscriptionConsiderationsSpeciales });

		var filtrePatientConditionsMedicales = $formulaireFiltres.find('.valeurPatientConditionsMedicales').val();
		if(filtrePatientConditionsMedicales != null && filtrePatientConditionsMedicales !== '')
			filtres.push({ name: 'fq', value: 'patientConditionsMedicales:' + filtrePatientConditionsMedicales });

		var filtrePatientCliniquesPrecedemmentFrequentees = $formulaireFiltres.find('.valeurPatientCliniquesPrecedemmentFrequentees').val();
		if(filtrePatientCliniquesPrecedemmentFrequentees != null && filtrePatientCliniquesPrecedemmentFrequentees !== '')
			filtres.push({ name: 'fq', value: 'patientCliniquesPrecedemmentFrequentees:' + filtrePatientCliniquesPrecedemmentFrequentees });

		var filtreFamilleCommentVousConnaissezClinique = $formulaireFiltres.find('.valeurFamilleCommentVousConnaissezClinique').val();
		if(filtreFamilleCommentVousConnaissezClinique != null && filtreFamilleCommentVousConnaissezClinique !== '')
			filtres.push({ name: 'fq', value: 'familleCommentVousConnaissezClinique:' + filtreFamilleCommentVousConnaissezClinique });

		var filtrePatientDescription = $formulaireFiltres.find('.valeurPatientDescription').val();
		if(filtrePatientDescription != null && filtrePatientDescription !== '')
			filtres.push({ name: 'fq', value: 'patientDescription:' + filtrePatientDescription });

		var filtrePatientObjectifs = $formulaireFiltres.find('.valeurPatientObjectifs').val();
		if(filtrePatientObjectifs != null && filtrePatientObjectifs !== '')
			filtres.push({ name: 'fq', value: 'patientObjectifs:' + filtrePatientObjectifs });

		var filtrePatientCle = $formulaireFiltres.find('.valeurPatientCle').val();
		if(filtrePatientCle != null && filtrePatientCle !== '')
			filtres.push({ name: 'fq', value: 'patientCle:' + filtrePatientCle });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreInheritPk = $formulaireFiltres.find('.valeurInheritPk').val();
		if(filtreInheritPk != null && filtreInheritPk !== '')
			filtres.push({ name: 'fq', value: 'inheritPk:' + filtreInheritPk });

		var filtreId = $formulaireFiltres.find('.valeurId').val();
		if(filtreId != null && filtreId !== '')
			filtres.push({ name: 'fq', value: 'id:' + filtreId });

		var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
		if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
			filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

		var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
		if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
			filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

		var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
		if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
			filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

		var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
		if(filtreSessionId != null && filtreSessionId !== '')
			filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

		var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
		if(filtreSauvegardes != null && filtreSauvegardes !== '')
			filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

		var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
		if(filtreObjetTitre != null && filtreObjetTitre !== '')
			filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

		var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
		if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
			filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtreInscriptionCle = $formulaireFiltres.find('.valeurInscriptionCle').val();
		if(filtreInscriptionCle != null && filtreInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCle:' + filtreInscriptionCle });

		var filtreCliniqueCle = $formulaireFiltres.find('.valeurCliniqueCle').val();
		if(filtreCliniqueCle != null && filtreCliniqueCle !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCle:' + filtreCliniqueCle });

		var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
		if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

		var filtreMedicaleTri = $formulaireFiltres.find('.valeurMedicaleTri').val();
		if(filtreMedicaleTri != null && filtreMedicaleTri !== '')
			filtres.push({ name: 'fq', value: 'medicaleTri:' + filtreMedicaleTri });

		var filtreCliniqueTri = $formulaireFiltres.find('.valeurCliniqueTri').val();
		if(filtreCliniqueTri != null && filtreCliniqueTri !== '')
			filtres.push({ name: 'fq', value: 'cliniqueTri:' + filtreCliniqueTri });

		var filtrePatientPrenom = $formulaireFiltres.find('.valeurPatientPrenom').val();
		if(filtrePatientPrenom != null && filtrePatientPrenom !== '')
			filtres.push({ name: 'fq', value: 'patientPrenom:' + filtrePatientPrenom });

		var filtrePatientPrenomPrefere = $formulaireFiltres.find('.valeurPatientPrenomPrefere').val();
		if(filtrePatientPrenomPrefere != null && filtrePatientPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientPrenomPrefere:' + filtrePatientPrenomPrefere });

		var filtrePatientFamilleNom = $formulaireFiltres.find('.valeurPatientFamilleNom').val();
		if(filtrePatientFamilleNom != null && filtrePatientFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'patientFamilleNom:' + filtrePatientFamilleNom });

		var filtrePatientNomComplet = $formulaireFiltres.find('.valeurPatientNomComplet').val();
		if(filtrePatientNomComplet != null && filtrePatientNomComplet !== '')
			filtres.push({ name: 'fq', value: 'patientNomComplet:' + filtrePatientNomComplet });

		var filtrePatientNomCompletPrefere = $formulaireFiltres.find('.valeurPatientNomCompletPrefere').val();
		if(filtrePatientNomCompletPrefere != null && filtrePatientNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientNomCompletPrefere:' + filtrePatientNomCompletPrefere });

		var filtrePatientDateNaissance = $formulaireFiltres.find('.valeurPatientDateNaissance').val();
		if(filtrePatientDateNaissance != null && filtrePatientDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissance:' + filtrePatientDateNaissance });

		var filtrePatientDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceDAnnee').val();
		if(filtrePatientDateNaissanceDAnnee != null && filtrePatientDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceDAnnee:' + filtrePatientDateNaissanceDAnnee });

		var filtrePatientDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceMoisDAnnee').val();
		if(filtrePatientDateNaissanceMoisDAnnee != null && filtrePatientDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceMoisDAnnee:' + filtrePatientDateNaissanceMoisDAnnee });

		var filtrePatientDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPatientDateNaissanceJourDeSemaine').val();
		if(filtrePatientDateNaissanceJourDeSemaine != null && filtrePatientDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceJourDeSemaine:' + filtrePatientDateNaissanceJourDeSemaine });

		var filtrePatientMoisNaissance = $formulaireFiltres.find('.valeurPatientMoisNaissance').val();
		if(filtrePatientMoisNaissance != null && filtrePatientMoisNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientMoisNaissance:' + filtrePatientMoisNaissance });

		var filtrePatientJourNaissance = $formulaireFiltres.find('.valeurPatientJourNaissance').val();
		if(filtrePatientJourNaissance != null && filtrePatientJourNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientJourNaissance:' + filtrePatientJourNaissance });

		var filtreCliniqueNom = $formulaireFiltres.find('.valeurCliniqueNom').val();
		if(filtreCliniqueNom != null && filtreCliniqueNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNom:' + filtreCliniqueNom });

		var filtreCliniqueNomComplet = $formulaireFiltres.find('.valeurCliniqueNomComplet').val();
		if(filtreCliniqueNomComplet != null && filtreCliniqueNomComplet !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNomComplet:' + filtreCliniqueNomComplet });

		var filtreCliniqueEmplacement = $formulaireFiltres.find('.valeurCliniqueEmplacement').val();
		if(filtreCliniqueEmplacement != null && filtreCliniqueEmplacement !== '')
			filtres.push({ name: 'fq', value: 'cliniqueEmplacement:' + filtreCliniqueEmplacement });

		var filtreCliniqueAddresse = $formulaireFiltres.find('.valeurCliniqueAddresse').val();
		if(filtreCliniqueAddresse != null && filtreCliniqueAddresse !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAddresse:' + filtreCliniqueAddresse });

		var filtreCliniqueNumeroTelephone = $formulaireFiltres.find('.valeurCliniqueNumeroTelephone').val();
		if(filtreCliniqueNumeroTelephone != null && filtreCliniqueNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNumeroTelephone:' + filtreCliniqueNumeroTelephone });

		var filtreCliniqueAdministrateurNom = $formulaireFiltres.find('.valeurCliniqueAdministrateurNom').val();
		if(filtreCliniqueAdministrateurNom != null && filtreCliniqueAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAdministrateurNom:' + filtreCliniqueAdministrateurNom });

		var filtreCustomerProfileId = $formulaireFiltres.find('.valeurCustomerProfileId').val();
		if(filtreCustomerProfileId != null && filtreCustomerProfileId !== '')
			filtres.push({ name: 'fq', value: 'customerProfileId:' + filtreCustomerProfileId });

		var filtreCreeDAnnee = $formulaireFiltres.find('.valeurCreeDAnnee').val();
		if(filtreCreeDAnnee != null && filtreCreeDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeDAnnee:' + filtreCreeDAnnee });

		var filtreCreeJourDeSemaine = $formulaireFiltres.find('.valeurCreeJourDeSemaine').val();
		if(filtreCreeJourDeSemaine != null && filtreCreeJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'creeJourDeSemaine:' + filtreCreeJourDeSemaine });

		var filtreCreeMoisDAnnee = $formulaireFiltres.find('.valeurCreeMoisDAnnee').val();
		if(filtreCreeMoisDAnnee != null && filtreCreeMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeMoisDAnnee:' + filtreCreeMoisDAnnee });

		var filtreCreeHeureDuJour = $formulaireFiltres.find('.valeurCreeHeureDuJour').val();
		if(filtreCreeHeureDuJour != null && filtreCreeHeureDuJour !== '')
			filtres.push({ name: 'fq', value: 'creeHeureDuJour:' + filtreCreeHeureDuJour });

		var filtreInscriptionDate1 = $formulaireFiltres.find('.valeurInscriptionDate1').val();
		if(filtreInscriptionDate1 != null && filtreInscriptionDate1 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate1:' + filtreInscriptionDate1 });

		var filtreInscriptionDate2 = $formulaireFiltres.find('.valeurInscriptionDate2').val();
		if(filtreInscriptionDate2 != null && filtreInscriptionDate2 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate2:' + filtreInscriptionDate2 });

		var filtreInscriptionDate3 = $formulaireFiltres.find('.valeurInscriptionDate3').val();
		if(filtreInscriptionDate3 != null && filtreInscriptionDate3 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate3:' + filtreInscriptionDate3 });

		var filtreInscriptionDate4 = $formulaireFiltres.find('.valeurInscriptionDate4').val();
		if(filtreInscriptionDate4 != null && filtreInscriptionDate4 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate4:' + filtreInscriptionDate4 });

		var filtreInscriptionDate5 = $formulaireFiltres.find('.valeurInscriptionDate5').val();
		if(filtreInscriptionDate5 != null && filtreInscriptionDate5 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate5:' + filtreInscriptionDate5 });

		var filtreInscriptionDate6 = $formulaireFiltres.find('.valeurInscriptionDate6').val();
		if(filtreInscriptionDate6 != null && filtreInscriptionDate6 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate6:' + filtreInscriptionDate6 });

		var filtreInscriptionDate7 = $formulaireFiltres.find('.valeurInscriptionDate7').val();
		if(filtreInscriptionDate7 != null && filtreInscriptionDate7 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate7:' + filtreInscriptionDate7 });

		var filtreInscriptionDate8 = $formulaireFiltres.find('.valeurInscriptionDate8').val();
		if(filtreInscriptionDate8 != null && filtreInscriptionDate8 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate8:' + filtreInscriptionDate8 });

		var filtreInscriptionDate9 = $formulaireFiltres.find('.valeurInscriptionDate9').val();
		if(filtreInscriptionDate9 != null && filtreInscriptionDate9 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate9:' + filtreInscriptionDate9 });

		var filtreInscriptionDate10 = $formulaireFiltres.find('.valeurInscriptionDate10').val();
		if(filtreInscriptionDate10 != null && filtreInscriptionDate10 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate10:' + filtreInscriptionDate10 });

		var filtreInscriptionNomComplet = $formulaireFiltres.find('.valeurInscriptionNomComplet').val();
		if(filtreInscriptionNomComplet != null && filtreInscriptionNomComplet !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomComplet:' + filtreInscriptionNomComplet });
	}
	return filtres;
}

function rechercheInscriptionMedicaleVals(filtres, success, error) {
	$.ajax({
		url: '/api/inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereInscriptionMedicaleObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherInscriptionMedicaleVals($formulaireFiltres, success, error);
}

function suggereInscriptionMedicalePatientCle(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-hostpital-user ');
			var $span = $('<span>').attr('class', '').text(o['patientNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_patientCle_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurPatientCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_patientCle_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionMedicaleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'PatientCle']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribuer)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#InscriptionMedicaleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	recherchePatientMedicaleVals(filtres, success, error);
}

function suggereInscriptionMedicaleUtilisateurCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objetTitre']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_utilisateurCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurUtilisateurCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_utilisateurCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionMedicaleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'UtilisateurCles']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribuer)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#InscriptionMedicaleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheUtilisateurSiteVals(filtres, success, error);
}

// RechercheAdmin //

async function rechercheadminInscriptionMedicale($formulaireFiltres, success, error) {
	var filtres = rechercheadminInscriptionMedicaleFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheadminInscriptionMedicaleVals(filtres, success, error);
}

function rechercheadminInscriptionMedicaleFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePk = $formulaireFiltres.find('.valeurPk').val();
		if(filtrePk != null && filtrePk !== '')
			filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

		var filtreCree = $formulaireFiltres.find('.valeurCree').val();
		if(filtreCree != null && filtreCree !== '')
			filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

		var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
		if(filtreModifie != null && filtreModifie !== '')
			filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

		var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
		if(filtreObjetId != null && filtreObjetId !== '')
			filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

		var $filtreArchiveCheckbox = $formulaireFiltres.find('input.valeurArchive[type = "checkbox"]');
		var $filtreArchiveSelect = $formulaireFiltres.find('select.valeurArchive');
		var filtreArchive = $filtreArchiveSelect.length ? $filtreArchiveSelect.val() : $filtreArchiveCheckbox.prop('checked');
		var filtreArchiveSelectVal = $formulaireFiltres.find('select.filtreArchive').val();
		var filtreArchive = null;
		if(filtreArchiveSelectVal !== '')
			filtreArchive = filtreArchiveSelectVal == 'true';
		if(filtreArchive != null && filtreArchive === true)
			filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

		var $filtreSupprimeCheckbox = $formulaireFiltres.find('input.valeurSupprime[type = "checkbox"]');
		var $filtreSupprimeSelect = $formulaireFiltres.find('select.valeurSupprime');
		var filtreSupprime = $filtreSupprimeSelect.length ? $filtreSupprimeSelect.val() : $filtreSupprimeCheckbox.prop('checked');
		var filtreSupprimeSelectVal = $formulaireFiltres.find('select.filtreSupprime').val();
		var filtreSupprime = null;
		if(filtreSupprimeSelectVal !== '')
			filtreSupprime = filtreSupprimeSelectVal == 'true';
		if(filtreSupprime != null && filtreSupprime === true)
			filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var filtreFamilleAddresse = $formulaireFiltres.find('.valeurFamilleAddresse').val();
		if(filtreFamilleAddresse != null && filtreFamilleAddresse !== '')
			filtres.push({ name: 'fq', value: 'familleAddresse:' + filtreFamilleAddresse });

		var filtreInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.valeurInscriptionConsiderationsSpeciales').val();
		if(filtreInscriptionConsiderationsSpeciales != null && filtreInscriptionConsiderationsSpeciales !== '')
			filtres.push({ name: 'fq', value: 'inscriptionConsiderationsSpeciales:' + filtreInscriptionConsiderationsSpeciales });

		var filtrePatientConditionsMedicales = $formulaireFiltres.find('.valeurPatientConditionsMedicales').val();
		if(filtrePatientConditionsMedicales != null && filtrePatientConditionsMedicales !== '')
			filtres.push({ name: 'fq', value: 'patientConditionsMedicales:' + filtrePatientConditionsMedicales });

		var filtrePatientCliniquesPrecedemmentFrequentees = $formulaireFiltres.find('.valeurPatientCliniquesPrecedemmentFrequentees').val();
		if(filtrePatientCliniquesPrecedemmentFrequentees != null && filtrePatientCliniquesPrecedemmentFrequentees !== '')
			filtres.push({ name: 'fq', value: 'patientCliniquesPrecedemmentFrequentees:' + filtrePatientCliniquesPrecedemmentFrequentees });

		var filtreFamilleCommentVousConnaissezClinique = $formulaireFiltres.find('.valeurFamilleCommentVousConnaissezClinique').val();
		if(filtreFamilleCommentVousConnaissezClinique != null && filtreFamilleCommentVousConnaissezClinique !== '')
			filtres.push({ name: 'fq', value: 'familleCommentVousConnaissezClinique:' + filtreFamilleCommentVousConnaissezClinique });

		var filtrePatientDescription = $formulaireFiltres.find('.valeurPatientDescription').val();
		if(filtrePatientDescription != null && filtrePatientDescription !== '')
			filtres.push({ name: 'fq', value: 'patientDescription:' + filtrePatientDescription });

		var filtrePatientObjectifs = $formulaireFiltres.find('.valeurPatientObjectifs').val();
		if(filtrePatientObjectifs != null && filtrePatientObjectifs !== '')
			filtres.push({ name: 'fq', value: 'patientObjectifs:' + filtrePatientObjectifs });

		var filtrePatientCle = $formulaireFiltres.find('.valeurPatientCle').val();
		if(filtrePatientCle != null && filtrePatientCle !== '')
			filtres.push({ name: 'fq', value: 'patientCle:' + filtrePatientCle });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreInheritPk = $formulaireFiltres.find('.valeurInheritPk').val();
		if(filtreInheritPk != null && filtreInheritPk !== '')
			filtres.push({ name: 'fq', value: 'inheritPk:' + filtreInheritPk });

		var filtreId = $formulaireFiltres.find('.valeurId').val();
		if(filtreId != null && filtreId !== '')
			filtres.push({ name: 'fq', value: 'id:' + filtreId });

		var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
		if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
			filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

		var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
		if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
			filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

		var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
		if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
			filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

		var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
		if(filtreSessionId != null && filtreSessionId !== '')
			filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

		var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
		if(filtreSauvegardes != null && filtreSauvegardes !== '')
			filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

		var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
		if(filtreObjetTitre != null && filtreObjetTitre !== '')
			filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

		var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
		if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
			filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtreInscriptionCle = $formulaireFiltres.find('.valeurInscriptionCle').val();
		if(filtreInscriptionCle != null && filtreInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCle:' + filtreInscriptionCle });

		var filtreCliniqueCle = $formulaireFiltres.find('.valeurCliniqueCle').val();
		if(filtreCliniqueCle != null && filtreCliniqueCle !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCle:' + filtreCliniqueCle });

		var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
		if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

		var filtreMedicaleTri = $formulaireFiltres.find('.valeurMedicaleTri').val();
		if(filtreMedicaleTri != null && filtreMedicaleTri !== '')
			filtres.push({ name: 'fq', value: 'medicaleTri:' + filtreMedicaleTri });

		var filtreCliniqueTri = $formulaireFiltres.find('.valeurCliniqueTri').val();
		if(filtreCliniqueTri != null && filtreCliniqueTri !== '')
			filtres.push({ name: 'fq', value: 'cliniqueTri:' + filtreCliniqueTri });

		var filtrePatientPrenom = $formulaireFiltres.find('.valeurPatientPrenom').val();
		if(filtrePatientPrenom != null && filtrePatientPrenom !== '')
			filtres.push({ name: 'fq', value: 'patientPrenom:' + filtrePatientPrenom });

		var filtrePatientPrenomPrefere = $formulaireFiltres.find('.valeurPatientPrenomPrefere').val();
		if(filtrePatientPrenomPrefere != null && filtrePatientPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientPrenomPrefere:' + filtrePatientPrenomPrefere });

		var filtrePatientFamilleNom = $formulaireFiltres.find('.valeurPatientFamilleNom').val();
		if(filtrePatientFamilleNom != null && filtrePatientFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'patientFamilleNom:' + filtrePatientFamilleNom });

		var filtrePatientNomComplet = $formulaireFiltres.find('.valeurPatientNomComplet').val();
		if(filtrePatientNomComplet != null && filtrePatientNomComplet !== '')
			filtres.push({ name: 'fq', value: 'patientNomComplet:' + filtrePatientNomComplet });

		var filtrePatientNomCompletPrefere = $formulaireFiltres.find('.valeurPatientNomCompletPrefere').val();
		if(filtrePatientNomCompletPrefere != null && filtrePatientNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientNomCompletPrefere:' + filtrePatientNomCompletPrefere });

		var filtrePatientDateNaissance = $formulaireFiltres.find('.valeurPatientDateNaissance').val();
		if(filtrePatientDateNaissance != null && filtrePatientDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissance:' + filtrePatientDateNaissance });

		var filtrePatientDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceDAnnee').val();
		if(filtrePatientDateNaissanceDAnnee != null && filtrePatientDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceDAnnee:' + filtrePatientDateNaissanceDAnnee });

		var filtrePatientDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceMoisDAnnee').val();
		if(filtrePatientDateNaissanceMoisDAnnee != null && filtrePatientDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceMoisDAnnee:' + filtrePatientDateNaissanceMoisDAnnee });

		var filtrePatientDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPatientDateNaissanceJourDeSemaine').val();
		if(filtrePatientDateNaissanceJourDeSemaine != null && filtrePatientDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceJourDeSemaine:' + filtrePatientDateNaissanceJourDeSemaine });

		var filtrePatientMoisNaissance = $formulaireFiltres.find('.valeurPatientMoisNaissance').val();
		if(filtrePatientMoisNaissance != null && filtrePatientMoisNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientMoisNaissance:' + filtrePatientMoisNaissance });

		var filtrePatientJourNaissance = $formulaireFiltres.find('.valeurPatientJourNaissance').val();
		if(filtrePatientJourNaissance != null && filtrePatientJourNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientJourNaissance:' + filtrePatientJourNaissance });

		var filtreCliniqueNom = $formulaireFiltres.find('.valeurCliniqueNom').val();
		if(filtreCliniqueNom != null && filtreCliniqueNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNom:' + filtreCliniqueNom });

		var filtreCliniqueNomComplet = $formulaireFiltres.find('.valeurCliniqueNomComplet').val();
		if(filtreCliniqueNomComplet != null && filtreCliniqueNomComplet !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNomComplet:' + filtreCliniqueNomComplet });

		var filtreCliniqueEmplacement = $formulaireFiltres.find('.valeurCliniqueEmplacement').val();
		if(filtreCliniqueEmplacement != null && filtreCliniqueEmplacement !== '')
			filtres.push({ name: 'fq', value: 'cliniqueEmplacement:' + filtreCliniqueEmplacement });

		var filtreCliniqueAddresse = $formulaireFiltres.find('.valeurCliniqueAddresse').val();
		if(filtreCliniqueAddresse != null && filtreCliniqueAddresse !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAddresse:' + filtreCliniqueAddresse });

		var filtreCliniqueNumeroTelephone = $formulaireFiltres.find('.valeurCliniqueNumeroTelephone').val();
		if(filtreCliniqueNumeroTelephone != null && filtreCliniqueNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNumeroTelephone:' + filtreCliniqueNumeroTelephone });

		var filtreCliniqueAdministrateurNom = $formulaireFiltres.find('.valeurCliniqueAdministrateurNom').val();
		if(filtreCliniqueAdministrateurNom != null && filtreCliniqueAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAdministrateurNom:' + filtreCliniqueAdministrateurNom });

		var filtreCustomerProfileId = $formulaireFiltres.find('.valeurCustomerProfileId').val();
		if(filtreCustomerProfileId != null && filtreCustomerProfileId !== '')
			filtres.push({ name: 'fq', value: 'customerProfileId:' + filtreCustomerProfileId });

		var filtreCreeDAnnee = $formulaireFiltres.find('.valeurCreeDAnnee').val();
		if(filtreCreeDAnnee != null && filtreCreeDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeDAnnee:' + filtreCreeDAnnee });

		var filtreCreeJourDeSemaine = $formulaireFiltres.find('.valeurCreeJourDeSemaine').val();
		if(filtreCreeJourDeSemaine != null && filtreCreeJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'creeJourDeSemaine:' + filtreCreeJourDeSemaine });

		var filtreCreeMoisDAnnee = $formulaireFiltres.find('.valeurCreeMoisDAnnee').val();
		if(filtreCreeMoisDAnnee != null && filtreCreeMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeMoisDAnnee:' + filtreCreeMoisDAnnee });

		var filtreCreeHeureDuJour = $formulaireFiltres.find('.valeurCreeHeureDuJour').val();
		if(filtreCreeHeureDuJour != null && filtreCreeHeureDuJour !== '')
			filtres.push({ name: 'fq', value: 'creeHeureDuJour:' + filtreCreeHeureDuJour });

		var filtreInscriptionDate1 = $formulaireFiltres.find('.valeurInscriptionDate1').val();
		if(filtreInscriptionDate1 != null && filtreInscriptionDate1 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate1:' + filtreInscriptionDate1 });

		var filtreInscriptionDate2 = $formulaireFiltres.find('.valeurInscriptionDate2').val();
		if(filtreInscriptionDate2 != null && filtreInscriptionDate2 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate2:' + filtreInscriptionDate2 });

		var filtreInscriptionDate3 = $formulaireFiltres.find('.valeurInscriptionDate3').val();
		if(filtreInscriptionDate3 != null && filtreInscriptionDate3 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate3:' + filtreInscriptionDate3 });

		var filtreInscriptionDate4 = $formulaireFiltres.find('.valeurInscriptionDate4').val();
		if(filtreInscriptionDate4 != null && filtreInscriptionDate4 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate4:' + filtreInscriptionDate4 });

		var filtreInscriptionDate5 = $formulaireFiltres.find('.valeurInscriptionDate5').val();
		if(filtreInscriptionDate5 != null && filtreInscriptionDate5 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate5:' + filtreInscriptionDate5 });

		var filtreInscriptionDate6 = $formulaireFiltres.find('.valeurInscriptionDate6').val();
		if(filtreInscriptionDate6 != null && filtreInscriptionDate6 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate6:' + filtreInscriptionDate6 });

		var filtreInscriptionDate7 = $formulaireFiltres.find('.valeurInscriptionDate7').val();
		if(filtreInscriptionDate7 != null && filtreInscriptionDate7 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate7:' + filtreInscriptionDate7 });

		var filtreInscriptionDate8 = $formulaireFiltres.find('.valeurInscriptionDate8').val();
		if(filtreInscriptionDate8 != null && filtreInscriptionDate8 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate8:' + filtreInscriptionDate8 });

		var filtreInscriptionDate9 = $formulaireFiltres.find('.valeurInscriptionDate9').val();
		if(filtreInscriptionDate9 != null && filtreInscriptionDate9 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate9:' + filtreInscriptionDate9 });

		var filtreInscriptionDate10 = $formulaireFiltres.find('.valeurInscriptionDate10').val();
		if(filtreInscriptionDate10 != null && filtreInscriptionDate10 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate10:' + filtreInscriptionDate10 });

		var filtreInscriptionNomComplet = $formulaireFiltres.find('.valeurInscriptionNomComplet').val();
		if(filtreInscriptionNomComplet != null && filtreInscriptionNomComplet !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomComplet:' + filtreInscriptionNomComplet });
	}
	return filtres;
}

function rechercheadminInscriptionMedicaleVals(filtres, success, error) {
	$.ajax({
		url: '/api/admin/inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereInscriptionMedicaleObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherInscriptionMedicaleVals($formulaireFiltres, success, error);
}

function suggereInscriptionMedicalePatientCle(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-hostpital-user ');
			var $span = $('<span>').attr('class', '').text(o['patientNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_patientCle_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurPatientCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_patientCle_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionMedicaleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'PatientCle']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribuer)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#InscriptionMedicaleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	recherchePatientMedicaleVals(filtres, success, error);
}

function suggereInscriptionMedicaleUtilisateurCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objetTitre']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_utilisateurCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurUtilisateurCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_utilisateurCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionMedicaleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'UtilisateurCles']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribuer)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#InscriptionMedicaleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheUtilisateurSiteVals(filtres, success, error);
}

// PATCHPaiements //

async function patchpaiementsInscriptionMedicale($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchpaiementsInscriptionMedicaleFiltres($formulaireFiltres);

	var vals = {};

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
	var removePk = $formulaireFiltres.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formulaireValeurs.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formulaireValeurs.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formulaireValeurs.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
	var removeCree = $formulaireFiltres.find('.removeCree').val() === 'true';
	var setCree = removeCree ? null : $formulaireValeurs.find('.setCree').val();
	if(removeCree || setCree != null && setCree !== '')
		vals['setCree'] = setCree;
	var addCree = $formulaireValeurs.find('.addCree').val();
	if(addCree != null && addCree !== '')
		vals['addCree'] = addCree;
	var removeCree = $formulaireValeurs.find('.removeCree').val();
	if(removeCree != null && removeCree !== '')
		vals['removeCree'] = removeCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
	var removeModifie = $formulaireFiltres.find('.removeModifie').val() === 'true';
	var setModifie = removeModifie ? null : $formulaireValeurs.find('.setModifie').val();
	if(removeModifie || setModifie != null && setModifie !== '')
		vals['setModifie'] = setModifie;
	var addModifie = $formulaireValeurs.find('.addModifie').val();
	if(addModifie != null && addModifie !== '')
		vals['addModifie'] = addModifie;
	var removeModifie = $formulaireValeurs.find('.removeModifie').val();
	if(removeModifie != null && removeModifie !== '')
		vals['removeModifie'] = removeModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
	var removeObjetId = $formulaireFiltres.find('.removeObjetId').val() === 'true';
	var setObjetId = removeObjetId ? null : $formulaireValeurs.find('.setObjetId').val();
	if(removeObjetId || setObjetId != null && setObjetId !== '')
		vals['setObjetId'] = setObjetId;
	var addObjetId = $formulaireValeurs.find('.addObjetId').val();
	if(addObjetId != null && addObjetId !== '')
		vals['addObjetId'] = addObjetId;
	var removeObjetId = $formulaireValeurs.find('.removeObjetId').val();
	if(removeObjetId != null && removeObjetId !== '')
		vals['removeObjetId'] = removeObjetId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
	var removeArchive = $formulaireFiltres.find('.removeArchive').val() === 'true';
	var valeurArchiveSelectVal = $formulaireValeurs.find('select.setArchive').val();
	var valeurArchive = null;
	if(valeurArchiveSelectVal !== '')
		valeurArchive = valeurArchiveSelectVal == 'true';
	setArchive = removeArchive ? null : valeurArchive;
	if(removeArchive || setArchive != null && setArchive !== '')
		vals['setArchive'] = setArchive;
	var addArchive = $formulaireValeurs.find('.addArchive').prop('checked');
	if(addArchive != null && addArchive !== '')
		vals['addArchive'] = addArchive;
	var removeArchive = $formulaireValeurs.find('.removeArchive').prop('checked');
	if(removeArchive != null && removeArchive !== '')
		vals['removeArchive'] = removeArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
	var removeSupprime = $formulaireFiltres.find('.removeSupprime').val() === 'true';
	var valeurSupprimeSelectVal = $formulaireValeurs.find('select.setSupprime').val();
	var valeurSupprime = null;
	if(valeurSupprimeSelectVal !== '')
		valeurSupprime = valeurSupprimeSelectVal == 'true';
	setSupprime = removeSupprime ? null : valeurSupprime;
	if(removeSupprime || setSupprime != null && setSupprime !== '')
		vals['setSupprime'] = setSupprime;
	var addSupprime = $formulaireValeurs.find('.addSupprime').prop('checked');
	if(addSupprime != null && addSupprime !== '')
		vals['addSupprime'] = addSupprime;
	var removeSupprime = $formulaireValeurs.find('.removeSupprime').prop('checked');
	if(removeSupprime != null && removeSupprime !== '')
		vals['removeSupprime'] = removeSupprime;

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	if(valeurInscriptionApprouve != null && valeurInscriptionApprouve !== '')
	var removeInscriptionApprouve = $formulaireFiltres.find('.removeInscriptionApprouve').val() === 'true';
	var valeurInscriptionApprouveSelectVal = $formulaireValeurs.find('select.setInscriptionApprouve').val();
	var valeurInscriptionApprouve = null;
	if(valeurInscriptionApprouveSelectVal !== '')
		valeurInscriptionApprouve = valeurInscriptionApprouveSelectVal == 'true';
	setInscriptionApprouve = removeInscriptionApprouve ? null : valeurInscriptionApprouve;
	if(removeInscriptionApprouve || setInscriptionApprouve != null && setInscriptionApprouve !== '')
		vals['setInscriptionApprouve'] = setInscriptionApprouve;
	var addInscriptionApprouve = $formulaireValeurs.find('.addInscriptionApprouve').prop('checked');
	if(addInscriptionApprouve != null && addInscriptionApprouve !== '')
		vals['addInscriptionApprouve'] = addInscriptionApprouve;
	var removeInscriptionApprouve = $formulaireValeurs.find('.removeInscriptionApprouve').prop('checked');
	if(removeInscriptionApprouve != null && removeInscriptionApprouve !== '')
		vals['removeInscriptionApprouve'] = removeInscriptionApprouve;

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	if(valeurInscriptionImmunisations != null && valeurInscriptionImmunisations !== '')
	var removeInscriptionImmunisations = $formulaireFiltres.find('.removeInscriptionImmunisations').val() === 'true';
	var valeurInscriptionImmunisationsSelectVal = $formulaireValeurs.find('select.setInscriptionImmunisations').val();
	var valeurInscriptionImmunisations = null;
	if(valeurInscriptionImmunisationsSelectVal !== '')
		valeurInscriptionImmunisations = valeurInscriptionImmunisationsSelectVal == 'true';
	setInscriptionImmunisations = removeInscriptionImmunisations ? null : valeurInscriptionImmunisations;
	if(removeInscriptionImmunisations || setInscriptionImmunisations != null && setInscriptionImmunisations !== '')
		vals['setInscriptionImmunisations'] = setInscriptionImmunisations;
	var addInscriptionImmunisations = $formulaireValeurs.find('.addInscriptionImmunisations').prop('checked');
	if(addInscriptionImmunisations != null && addInscriptionImmunisations !== '')
		vals['addInscriptionImmunisations'] = addInscriptionImmunisations;
	var removeInscriptionImmunisations = $formulaireValeurs.find('.removeInscriptionImmunisations').prop('checked');
	if(removeInscriptionImmunisations != null && removeInscriptionImmunisations !== '')
		vals['removeInscriptionImmunisations'] = removeInscriptionImmunisations;

	var valeurFamilleAddresse = $formulaireValeurs.find('.valeurFamilleAddresse').val();
	if(valeurFamilleAddresse != null && valeurFamilleAddresse !== '')
	var removeFamilleAddresse = $formulaireFiltres.find('.removeFamilleAddresse').val() === 'true';
	var setFamilleAddresse = removeFamilleAddresse ? null : $formulaireValeurs.find('.setFamilleAddresse').val();
	if(removeFamilleAddresse || setFamilleAddresse != null && setFamilleAddresse !== '')
		vals['setFamilleAddresse'] = setFamilleAddresse;
	var addFamilleAddresse = $formulaireValeurs.find('.addFamilleAddresse').val();
	if(addFamilleAddresse != null && addFamilleAddresse !== '')
		vals['addFamilleAddresse'] = addFamilleAddresse;
	var removeFamilleAddresse = $formulaireValeurs.find('.removeFamilleAddresse').val();
	if(removeFamilleAddresse != null && removeFamilleAddresse !== '')
		vals['removeFamilleAddresse'] = removeFamilleAddresse;

	var valeurInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.valeurInscriptionConsiderationsSpeciales').val();
	if(valeurInscriptionConsiderationsSpeciales != null && valeurInscriptionConsiderationsSpeciales !== '')
	var removeInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.removeInscriptionConsiderationsSpeciales').val() === 'true';
	var setInscriptionConsiderationsSpeciales = removeInscriptionConsiderationsSpeciales ? null : $formulaireValeurs.find('.setInscriptionConsiderationsSpeciales').val();
	if(removeInscriptionConsiderationsSpeciales || setInscriptionConsiderationsSpeciales != null && setInscriptionConsiderationsSpeciales !== '')
		vals['setInscriptionConsiderationsSpeciales'] = setInscriptionConsiderationsSpeciales;
	var addInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.addInscriptionConsiderationsSpeciales').val();
	if(addInscriptionConsiderationsSpeciales != null && addInscriptionConsiderationsSpeciales !== '')
		vals['addInscriptionConsiderationsSpeciales'] = addInscriptionConsiderationsSpeciales;
	var removeInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.removeInscriptionConsiderationsSpeciales').val();
	if(removeInscriptionConsiderationsSpeciales != null && removeInscriptionConsiderationsSpeciales !== '')
		vals['removeInscriptionConsiderationsSpeciales'] = removeInscriptionConsiderationsSpeciales;

	var valeurPatientConditionsMedicales = $formulaireValeurs.find('.valeurPatientConditionsMedicales').val();
	if(valeurPatientConditionsMedicales != null && valeurPatientConditionsMedicales !== '')
	var removePatientConditionsMedicales = $formulaireFiltres.find('.removePatientConditionsMedicales').val() === 'true';
	var setPatientConditionsMedicales = removePatientConditionsMedicales ? null : $formulaireValeurs.find('.setPatientConditionsMedicales').val();
	if(removePatientConditionsMedicales || setPatientConditionsMedicales != null && setPatientConditionsMedicales !== '')
		vals['setPatientConditionsMedicales'] = setPatientConditionsMedicales;
	var addPatientConditionsMedicales = $formulaireValeurs.find('.addPatientConditionsMedicales').val();
	if(addPatientConditionsMedicales != null && addPatientConditionsMedicales !== '')
		vals['addPatientConditionsMedicales'] = addPatientConditionsMedicales;
	var removePatientConditionsMedicales = $formulaireValeurs.find('.removePatientConditionsMedicales').val();
	if(removePatientConditionsMedicales != null && removePatientConditionsMedicales !== '')
		vals['removePatientConditionsMedicales'] = removePatientConditionsMedicales;

	var valeurPatientCliniquesPrecedemmentFrequentees = $formulaireValeurs.find('.valeurPatientCliniquesPrecedemmentFrequentees').val();
	if(valeurPatientCliniquesPrecedemmentFrequentees != null && valeurPatientCliniquesPrecedemmentFrequentees !== '')
	var removePatientCliniquesPrecedemmentFrequentees = $formulaireFiltres.find('.removePatientCliniquesPrecedemmentFrequentees').val() === 'true';
	var setPatientCliniquesPrecedemmentFrequentees = removePatientCliniquesPrecedemmentFrequentees ? null : $formulaireValeurs.find('.setPatientCliniquesPrecedemmentFrequentees').val();
	if(removePatientCliniquesPrecedemmentFrequentees || setPatientCliniquesPrecedemmentFrequentees != null && setPatientCliniquesPrecedemmentFrequentees !== '')
		vals['setPatientCliniquesPrecedemmentFrequentees'] = setPatientCliniquesPrecedemmentFrequentees;
	var addPatientCliniquesPrecedemmentFrequentees = $formulaireValeurs.find('.addPatientCliniquesPrecedemmentFrequentees').val();
	if(addPatientCliniquesPrecedemmentFrequentees != null && addPatientCliniquesPrecedemmentFrequentees !== '')
		vals['addPatientCliniquesPrecedemmentFrequentees'] = addPatientCliniquesPrecedemmentFrequentees;
	var removePatientCliniquesPrecedemmentFrequentees = $formulaireValeurs.find('.removePatientCliniquesPrecedemmentFrequentees').val();
	if(removePatientCliniquesPrecedemmentFrequentees != null && removePatientCliniquesPrecedemmentFrequentees !== '')
		vals['removePatientCliniquesPrecedemmentFrequentees'] = removePatientCliniquesPrecedemmentFrequentees;

	var valeurFamilleCommentVousConnaissezClinique = $formulaireValeurs.find('.valeurFamilleCommentVousConnaissezClinique').val();
	if(valeurFamilleCommentVousConnaissezClinique != null && valeurFamilleCommentVousConnaissezClinique !== '')
	var removeFamilleCommentVousConnaissezClinique = $formulaireFiltres.find('.removeFamilleCommentVousConnaissezClinique').val() === 'true';
	var setFamilleCommentVousConnaissezClinique = removeFamilleCommentVousConnaissezClinique ? null : $formulaireValeurs.find('.setFamilleCommentVousConnaissezClinique').val();
	if(removeFamilleCommentVousConnaissezClinique || setFamilleCommentVousConnaissezClinique != null && setFamilleCommentVousConnaissezClinique !== '')
		vals['setFamilleCommentVousConnaissezClinique'] = setFamilleCommentVousConnaissezClinique;
	var addFamilleCommentVousConnaissezClinique = $formulaireValeurs.find('.addFamilleCommentVousConnaissezClinique').val();
	if(addFamilleCommentVousConnaissezClinique != null && addFamilleCommentVousConnaissezClinique !== '')
		vals['addFamilleCommentVousConnaissezClinique'] = addFamilleCommentVousConnaissezClinique;
	var removeFamilleCommentVousConnaissezClinique = $formulaireValeurs.find('.removeFamilleCommentVousConnaissezClinique').val();
	if(removeFamilleCommentVousConnaissezClinique != null && removeFamilleCommentVousConnaissezClinique !== '')
		vals['removeFamilleCommentVousConnaissezClinique'] = removeFamilleCommentVousConnaissezClinique;

	var valeurPatientDescription = $formulaireValeurs.find('.valeurPatientDescription').val();
	if(valeurPatientDescription != null && valeurPatientDescription !== '')
	var removePatientDescription = $formulaireFiltres.find('.removePatientDescription').val() === 'true';
	var setPatientDescription = removePatientDescription ? null : $formulaireValeurs.find('.setPatientDescription').val();
	if(removePatientDescription || setPatientDescription != null && setPatientDescription !== '')
		vals['setPatientDescription'] = setPatientDescription;
	var addPatientDescription = $formulaireValeurs.find('.addPatientDescription').val();
	if(addPatientDescription != null && addPatientDescription !== '')
		vals['addPatientDescription'] = addPatientDescription;
	var removePatientDescription = $formulaireValeurs.find('.removePatientDescription').val();
	if(removePatientDescription != null && removePatientDescription !== '')
		vals['removePatientDescription'] = removePatientDescription;

	var valeurPatientObjectifs = $formulaireValeurs.find('.valeurPatientObjectifs').val();
	if(valeurPatientObjectifs != null && valeurPatientObjectifs !== '')
	var removePatientObjectifs = $formulaireFiltres.find('.removePatientObjectifs').val() === 'true';
	var setPatientObjectifs = removePatientObjectifs ? null : $formulaireValeurs.find('.setPatientObjectifs').val();
	if(removePatientObjectifs || setPatientObjectifs != null && setPatientObjectifs !== '')
		vals['setPatientObjectifs'] = setPatientObjectifs;
	var addPatientObjectifs = $formulaireValeurs.find('.addPatientObjectifs').val();
	if(addPatientObjectifs != null && addPatientObjectifs !== '')
		vals['addPatientObjectifs'] = addPatientObjectifs;
	var removePatientObjectifs = $formulaireValeurs.find('.removePatientObjectifs').val();
	if(removePatientObjectifs != null && removePatientObjectifs !== '')
		vals['removePatientObjectifs'] = removePatientObjectifs;

	var valeurPatientCle = $formulaireValeurs.find('input.valeurPatientCle:checked').val();
	if(valeurPatientCle != null && valeurPatientCle !== '')
		vals['setPatientCle'] = valeurPatientCle;

	var valeurUtilisateurCles = $formulaireValeurs.find('input.valeurUtilisateurCles:checked').val();
	if(valeurUtilisateurCles != null && valeurUtilisateurCles !== '')
		vals['addUtilisateurCles'] = valeurUtilisateurCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
	var removeInheritPk = $formulaireFiltres.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formulaireValeurs.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formulaireValeurs.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formulaireValeurs.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
	var removeSessionId = $formulaireFiltres.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formulaireValeurs.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formulaireValeurs.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formulaireValeurs.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
	var removeUtilisateurId = $formulaireFiltres.find('.removeUtilisateurId').val() === 'true';
	var setUtilisateurId = removeUtilisateurId ? null : $formulaireValeurs.find('.setUtilisateurId').val();
	if(removeUtilisateurId || setUtilisateurId != null && setUtilisateurId !== '')
		vals['setUtilisateurId'] = setUtilisateurId;
	var addUtilisateurId = $formulaireValeurs.find('.addUtilisateurId').val();
	if(addUtilisateurId != null && addUtilisateurId !== '')
		vals['addUtilisateurId'] = addUtilisateurId;
	var removeUtilisateurId = $formulaireValeurs.find('.removeUtilisateurId').val();
	if(removeUtilisateurId != null && removeUtilisateurId !== '')
		vals['removeUtilisateurId'] = removeUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
	var removeUtilisateurCle = $formulaireFiltres.find('.removeUtilisateurCle').val() === 'true';
	var setUtilisateurCle = removeUtilisateurCle ? null : $formulaireValeurs.find('.setUtilisateurCle').val();
	if(removeUtilisateurCle || setUtilisateurCle != null && setUtilisateurCle !== '')
		vals['setUtilisateurCle'] = setUtilisateurCle;
	var addUtilisateurCle = $formulaireValeurs.find('.addUtilisateurCle').val();
	if(addUtilisateurCle != null && addUtilisateurCle !== '')
		vals['addUtilisateurCle'] = addUtilisateurCle;
	var removeUtilisateurCle = $formulaireValeurs.find('.removeUtilisateurCle').val();
	if(removeUtilisateurCle != null && removeUtilisateurCle !== '')
		vals['removeUtilisateurCle'] = removeUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
	var removeObjetTitre = $formulaireFiltres.find('.removeObjetTitre').val() === 'true';
	var setObjetTitre = removeObjetTitre ? null : $formulaireValeurs.find('.setObjetTitre').val();
	if(removeObjetTitre || setObjetTitre != null && setObjetTitre !== '')
		vals['setObjetTitre'] = setObjetTitre;
	var addObjetTitre = $formulaireValeurs.find('.addObjetTitre').val();
	if(addObjetTitre != null && addObjetTitre !== '')
		vals['addObjetTitre'] = addObjetTitre;
	var removeObjetTitre = $formulaireValeurs.find('.removeObjetTitre').val();
	if(removeObjetTitre != null && removeObjetTitre !== '')
		vals['removeObjetTitre'] = removeObjetTitre;

	var valeurPatientNomComplet = $formulaireValeurs.find('.valeurPatientNomComplet').val();
	if(valeurPatientNomComplet != null && valeurPatientNomComplet !== '')
	var removePatientNomComplet = $formulaireFiltres.find('.removePatientNomComplet').val() === 'true';
	var setPatientNomComplet = removePatientNomComplet ? null : $formulaireValeurs.find('.setPatientNomComplet').val();
	if(removePatientNomComplet || setPatientNomComplet != null && setPatientNomComplet !== '')
		vals['setPatientNomComplet'] = setPatientNomComplet;
	var addPatientNomComplet = $formulaireValeurs.find('.addPatientNomComplet').val();
	if(addPatientNomComplet != null && addPatientNomComplet !== '')
		vals['addPatientNomComplet'] = addPatientNomComplet;
	var removePatientNomComplet = $formulaireValeurs.find('.removePatientNomComplet').val();
	if(removePatientNomComplet != null && removePatientNomComplet !== '')
		vals['removePatientNomComplet'] = removePatientNomComplet;

	var valeurPatientNomCompletPrefere = $formulaireValeurs.find('.valeurPatientNomCompletPrefere').val();
	if(valeurPatientNomCompletPrefere != null && valeurPatientNomCompletPrefere !== '')
	var removePatientNomCompletPrefere = $formulaireFiltres.find('.removePatientNomCompletPrefere').val() === 'true';
	var setPatientNomCompletPrefere = removePatientNomCompletPrefere ? null : $formulaireValeurs.find('.setPatientNomCompletPrefere').val();
	if(removePatientNomCompletPrefere || setPatientNomCompletPrefere != null && setPatientNomCompletPrefere !== '')
		vals['setPatientNomCompletPrefere'] = setPatientNomCompletPrefere;
	var addPatientNomCompletPrefere = $formulaireValeurs.find('.addPatientNomCompletPrefere').val();
	if(addPatientNomCompletPrefere != null && addPatientNomCompletPrefere !== '')
		vals['addPatientNomCompletPrefere'] = addPatientNomCompletPrefere;
	var removePatientNomCompletPrefere = $formulaireValeurs.find('.removePatientNomCompletPrefere').val();
	if(removePatientNomCompletPrefere != null && removePatientNomCompletPrefere !== '')
		vals['removePatientNomCompletPrefere'] = removePatientNomCompletPrefere;

	var valeurPatientDateNaissance = $formulaireValeurs.find('.valeurPatientDateNaissance').val();
	if(valeurPatientDateNaissance != null && valeurPatientDateNaissance !== '')
	var removePatientDateNaissance = $formulaireFiltres.find('.removePatientDateNaissance').val() === 'true';
	var setPatientDateNaissance = removePatientDateNaissance ? null : $formulaireValeurs.find('.setPatientDateNaissance').val();
	if(removePatientDateNaissance || setPatientDateNaissance != null && setPatientDateNaissance !== '')
		vals['setPatientDateNaissance'] = setPatientDateNaissance;
	var addPatientDateNaissance = $formulaireValeurs.find('.addPatientDateNaissance').val();
	if(addPatientDateNaissance != null && addPatientDateNaissance !== '')
		vals['addPatientDateNaissance'] = addPatientDateNaissance;
	var removePatientDateNaissance = $formulaireValeurs.find('.removePatientDateNaissance').val();
	if(removePatientDateNaissance != null && removePatientDateNaissance !== '')
		vals['removePatientDateNaissance'] = removePatientDateNaissance;

	var valeurCliniqueAddresse = $formulaireValeurs.find('.valeurCliniqueAddresse').val();
	if(valeurCliniqueAddresse != null && valeurCliniqueAddresse !== '')
	var removeCliniqueAddresse = $formulaireFiltres.find('.removeCliniqueAddresse').val() === 'true';
	var setCliniqueAddresse = removeCliniqueAddresse ? null : $formulaireValeurs.find('.setCliniqueAddresse').val();
	if(removeCliniqueAddresse || setCliniqueAddresse != null && setCliniqueAddresse !== '')
		vals['setCliniqueAddresse'] = setCliniqueAddresse;
	var addCliniqueAddresse = $formulaireValeurs.find('.addCliniqueAddresse').val();
	if(addCliniqueAddresse != null && addCliniqueAddresse !== '')
		vals['addCliniqueAddresse'] = addCliniqueAddresse;
	var removeCliniqueAddresse = $formulaireValeurs.find('.removeCliniqueAddresse').val();
	if(removeCliniqueAddresse != null && removeCliniqueAddresse !== '')
		vals['removeCliniqueAddresse'] = removeCliniqueAddresse;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
	var removeCustomerProfileId = $formulaireFiltres.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formulaireValeurs.find('.setCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	var addCustomerProfileId = $formulaireValeurs.find('.addCustomerProfileId').val();
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formulaireValeurs.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valeurInscriptionSignature1 = $formulaireValeurs.find('.valeurInscriptionSignature1').val();
	if(valeurInscriptionSignature1 != null && valeurInscriptionSignature1 !== '')
	var removeInscriptionSignature1 = $formulaireFiltres.find('.removeInscriptionSignature1').val() === 'true';
	var setInscriptionSignature1 = removeInscriptionSignature1 ? null : $formulaireValeurs.find('.setInscriptionSignature1').val();
	if(removeInscriptionSignature1 || setInscriptionSignature1 != null && setInscriptionSignature1 !== '')
		vals['setInscriptionSignature1'] = setInscriptionSignature1;
	var addInscriptionSignature1 = $formulaireValeurs.find('.addInscriptionSignature1').val();
	if(addInscriptionSignature1 != null && addInscriptionSignature1 !== '')
		vals['addInscriptionSignature1'] = addInscriptionSignature1;
	var removeInscriptionSignature1 = $formulaireValeurs.find('.removeInscriptionSignature1').val();
	if(removeInscriptionSignature1 != null && removeInscriptionSignature1 !== '')
		vals['removeInscriptionSignature1'] = removeInscriptionSignature1;

	var valeurInscriptionSignature2 = $formulaireValeurs.find('.valeurInscriptionSignature2').val();
	if(valeurInscriptionSignature2 != null && valeurInscriptionSignature2 !== '')
	var removeInscriptionSignature2 = $formulaireFiltres.find('.removeInscriptionSignature2').val() === 'true';
	var setInscriptionSignature2 = removeInscriptionSignature2 ? null : $formulaireValeurs.find('.setInscriptionSignature2').val();
	if(removeInscriptionSignature2 || setInscriptionSignature2 != null && setInscriptionSignature2 !== '')
		vals['setInscriptionSignature2'] = setInscriptionSignature2;
	var addInscriptionSignature2 = $formulaireValeurs.find('.addInscriptionSignature2').val();
	if(addInscriptionSignature2 != null && addInscriptionSignature2 !== '')
		vals['addInscriptionSignature2'] = addInscriptionSignature2;
	var removeInscriptionSignature2 = $formulaireValeurs.find('.removeInscriptionSignature2').val();
	if(removeInscriptionSignature2 != null && removeInscriptionSignature2 !== '')
		vals['removeInscriptionSignature2'] = removeInscriptionSignature2;

	var valeurInscriptionSignature3 = $formulaireValeurs.find('.valeurInscriptionSignature3').val();
	if(valeurInscriptionSignature3 != null && valeurInscriptionSignature3 !== '')
	var removeInscriptionSignature3 = $formulaireFiltres.find('.removeInscriptionSignature3').val() === 'true';
	var setInscriptionSignature3 = removeInscriptionSignature3 ? null : $formulaireValeurs.find('.setInscriptionSignature3').val();
	if(removeInscriptionSignature3 || setInscriptionSignature3 != null && setInscriptionSignature3 !== '')
		vals['setInscriptionSignature3'] = setInscriptionSignature3;
	var addInscriptionSignature3 = $formulaireValeurs.find('.addInscriptionSignature3').val();
	if(addInscriptionSignature3 != null && addInscriptionSignature3 !== '')
		vals['addInscriptionSignature3'] = addInscriptionSignature3;
	var removeInscriptionSignature3 = $formulaireValeurs.find('.removeInscriptionSignature3').val();
	if(removeInscriptionSignature3 != null && removeInscriptionSignature3 !== '')
		vals['removeInscriptionSignature3'] = removeInscriptionSignature3;

	var valeurInscriptionSignature4 = $formulaireValeurs.find('.valeurInscriptionSignature4').val();
	if(valeurInscriptionSignature4 != null && valeurInscriptionSignature4 !== '')
	var removeInscriptionSignature4 = $formulaireFiltres.find('.removeInscriptionSignature4').val() === 'true';
	var setInscriptionSignature4 = removeInscriptionSignature4 ? null : $formulaireValeurs.find('.setInscriptionSignature4').val();
	if(removeInscriptionSignature4 || setInscriptionSignature4 != null && setInscriptionSignature4 !== '')
		vals['setInscriptionSignature4'] = setInscriptionSignature4;
	var addInscriptionSignature4 = $formulaireValeurs.find('.addInscriptionSignature4').val();
	if(addInscriptionSignature4 != null && addInscriptionSignature4 !== '')
		vals['addInscriptionSignature4'] = addInscriptionSignature4;
	var removeInscriptionSignature4 = $formulaireValeurs.find('.removeInscriptionSignature4').val();
	if(removeInscriptionSignature4 != null && removeInscriptionSignature4 !== '')
		vals['removeInscriptionSignature4'] = removeInscriptionSignature4;

	var valeurInscriptionSignature5 = $formulaireValeurs.find('.valeurInscriptionSignature5').val();
	if(valeurInscriptionSignature5 != null && valeurInscriptionSignature5 !== '')
	var removeInscriptionSignature5 = $formulaireFiltres.find('.removeInscriptionSignature5').val() === 'true';
	var setInscriptionSignature5 = removeInscriptionSignature5 ? null : $formulaireValeurs.find('.setInscriptionSignature5').val();
	if(removeInscriptionSignature5 || setInscriptionSignature5 != null && setInscriptionSignature5 !== '')
		vals['setInscriptionSignature5'] = setInscriptionSignature5;
	var addInscriptionSignature5 = $formulaireValeurs.find('.addInscriptionSignature5').val();
	if(addInscriptionSignature5 != null && addInscriptionSignature5 !== '')
		vals['addInscriptionSignature5'] = addInscriptionSignature5;
	var removeInscriptionSignature5 = $formulaireValeurs.find('.removeInscriptionSignature5').val();
	if(removeInscriptionSignature5 != null && removeInscriptionSignature5 !== '')
		vals['removeInscriptionSignature5'] = removeInscriptionSignature5;

	var valeurInscriptionSignature6 = $formulaireValeurs.find('.valeurInscriptionSignature6').val();
	if(valeurInscriptionSignature6 != null && valeurInscriptionSignature6 !== '')
	var removeInscriptionSignature6 = $formulaireFiltres.find('.removeInscriptionSignature6').val() === 'true';
	var setInscriptionSignature6 = removeInscriptionSignature6 ? null : $formulaireValeurs.find('.setInscriptionSignature6').val();
	if(removeInscriptionSignature6 || setInscriptionSignature6 != null && setInscriptionSignature6 !== '')
		vals['setInscriptionSignature6'] = setInscriptionSignature6;
	var addInscriptionSignature6 = $formulaireValeurs.find('.addInscriptionSignature6').val();
	if(addInscriptionSignature6 != null && addInscriptionSignature6 !== '')
		vals['addInscriptionSignature6'] = addInscriptionSignature6;
	var removeInscriptionSignature6 = $formulaireValeurs.find('.removeInscriptionSignature6').val();
	if(removeInscriptionSignature6 != null && removeInscriptionSignature6 !== '')
		vals['removeInscriptionSignature6'] = removeInscriptionSignature6;

	var valeurInscriptionSignature7 = $formulaireValeurs.find('.valeurInscriptionSignature7').val();
	if(valeurInscriptionSignature7 != null && valeurInscriptionSignature7 !== '')
	var removeInscriptionSignature7 = $formulaireFiltres.find('.removeInscriptionSignature7').val() === 'true';
	var setInscriptionSignature7 = removeInscriptionSignature7 ? null : $formulaireValeurs.find('.setInscriptionSignature7').val();
	if(removeInscriptionSignature7 || setInscriptionSignature7 != null && setInscriptionSignature7 !== '')
		vals['setInscriptionSignature7'] = setInscriptionSignature7;
	var addInscriptionSignature7 = $formulaireValeurs.find('.addInscriptionSignature7').val();
	if(addInscriptionSignature7 != null && addInscriptionSignature7 !== '')
		vals['addInscriptionSignature7'] = addInscriptionSignature7;
	var removeInscriptionSignature7 = $formulaireValeurs.find('.removeInscriptionSignature7').val();
	if(removeInscriptionSignature7 != null && removeInscriptionSignature7 !== '')
		vals['removeInscriptionSignature7'] = removeInscriptionSignature7;

	var valeurInscriptionSignature8 = $formulaireValeurs.find('.valeurInscriptionSignature8').val();
	if(valeurInscriptionSignature8 != null && valeurInscriptionSignature8 !== '')
	var removeInscriptionSignature8 = $formulaireFiltres.find('.removeInscriptionSignature8').val() === 'true';
	var setInscriptionSignature8 = removeInscriptionSignature8 ? null : $formulaireValeurs.find('.setInscriptionSignature8').val();
	if(removeInscriptionSignature8 || setInscriptionSignature8 != null && setInscriptionSignature8 !== '')
		vals['setInscriptionSignature8'] = setInscriptionSignature8;
	var addInscriptionSignature8 = $formulaireValeurs.find('.addInscriptionSignature8').val();
	if(addInscriptionSignature8 != null && addInscriptionSignature8 !== '')
		vals['addInscriptionSignature8'] = addInscriptionSignature8;
	var removeInscriptionSignature8 = $formulaireValeurs.find('.removeInscriptionSignature8').val();
	if(removeInscriptionSignature8 != null && removeInscriptionSignature8 !== '')
		vals['removeInscriptionSignature8'] = removeInscriptionSignature8;

	var valeurInscriptionSignature9 = $formulaireValeurs.find('.valeurInscriptionSignature9').val();
	if(valeurInscriptionSignature9 != null && valeurInscriptionSignature9 !== '')
	var removeInscriptionSignature9 = $formulaireFiltres.find('.removeInscriptionSignature9').val() === 'true';
	var setInscriptionSignature9 = removeInscriptionSignature9 ? null : $formulaireValeurs.find('.setInscriptionSignature9').val();
	if(removeInscriptionSignature9 || setInscriptionSignature9 != null && setInscriptionSignature9 !== '')
		vals['setInscriptionSignature9'] = setInscriptionSignature9;
	var addInscriptionSignature9 = $formulaireValeurs.find('.addInscriptionSignature9').val();
	if(addInscriptionSignature9 != null && addInscriptionSignature9 !== '')
		vals['addInscriptionSignature9'] = addInscriptionSignature9;
	var removeInscriptionSignature9 = $formulaireValeurs.find('.removeInscriptionSignature9').val();
	if(removeInscriptionSignature9 != null && removeInscriptionSignature9 !== '')
		vals['removeInscriptionSignature9'] = removeInscriptionSignature9;

	var valeurInscriptionSignature10 = $formulaireValeurs.find('.valeurInscriptionSignature10').val();
	if(valeurInscriptionSignature10 != null && valeurInscriptionSignature10 !== '')
	var removeInscriptionSignature10 = $formulaireFiltres.find('.removeInscriptionSignature10').val() === 'true';
	var setInscriptionSignature10 = removeInscriptionSignature10 ? null : $formulaireValeurs.find('.setInscriptionSignature10').val();
	if(removeInscriptionSignature10 || setInscriptionSignature10 != null && setInscriptionSignature10 !== '')
		vals['setInscriptionSignature10'] = setInscriptionSignature10;
	var addInscriptionSignature10 = $formulaireValeurs.find('.addInscriptionSignature10').val();
	if(addInscriptionSignature10 != null && addInscriptionSignature10 !== '')
		vals['addInscriptionSignature10'] = addInscriptionSignature10;
	var removeInscriptionSignature10 = $formulaireValeurs.find('.removeInscriptionSignature10').val();
	if(removeInscriptionSignature10 != null && removeInscriptionSignature10 !== '')
		vals['removeInscriptionSignature10'] = removeInscriptionSignature10;

	var valeurInscriptionDate1 = $formulaireValeurs.find('.valeurInscriptionDate1').val();
	if(valeurInscriptionDate1 != null && valeurInscriptionDate1 !== '')
	var removeInscriptionDate1 = $formulaireFiltres.find('.removeInscriptionDate1').val() === 'true';
	var setInscriptionDate1 = removeInscriptionDate1 ? null : $formulaireValeurs.find('.setInscriptionDate1').val();
	if(removeInscriptionDate1 || setInscriptionDate1 != null && setInscriptionDate1 !== '')
		vals['setInscriptionDate1'] = setInscriptionDate1;
	var addInscriptionDate1 = $formulaireValeurs.find('.addInscriptionDate1').val();
	if(addInscriptionDate1 != null && addInscriptionDate1 !== '')
		vals['addInscriptionDate1'] = addInscriptionDate1;
	var removeInscriptionDate1 = $formulaireValeurs.find('.removeInscriptionDate1').val();
	if(removeInscriptionDate1 != null && removeInscriptionDate1 !== '')
		vals['removeInscriptionDate1'] = removeInscriptionDate1;

	var valeurInscriptionDate2 = $formulaireValeurs.find('.valeurInscriptionDate2').val();
	if(valeurInscriptionDate2 != null && valeurInscriptionDate2 !== '')
	var removeInscriptionDate2 = $formulaireFiltres.find('.removeInscriptionDate2').val() === 'true';
	var setInscriptionDate2 = removeInscriptionDate2 ? null : $formulaireValeurs.find('.setInscriptionDate2').val();
	if(removeInscriptionDate2 || setInscriptionDate2 != null && setInscriptionDate2 !== '')
		vals['setInscriptionDate2'] = setInscriptionDate2;
	var addInscriptionDate2 = $formulaireValeurs.find('.addInscriptionDate2').val();
	if(addInscriptionDate2 != null && addInscriptionDate2 !== '')
		vals['addInscriptionDate2'] = addInscriptionDate2;
	var removeInscriptionDate2 = $formulaireValeurs.find('.removeInscriptionDate2').val();
	if(removeInscriptionDate2 != null && removeInscriptionDate2 !== '')
		vals['removeInscriptionDate2'] = removeInscriptionDate2;

	var valeurInscriptionDate3 = $formulaireValeurs.find('.valeurInscriptionDate3').val();
	if(valeurInscriptionDate3 != null && valeurInscriptionDate3 !== '')
	var removeInscriptionDate3 = $formulaireFiltres.find('.removeInscriptionDate3').val() === 'true';
	var setInscriptionDate3 = removeInscriptionDate3 ? null : $formulaireValeurs.find('.setInscriptionDate3').val();
	if(removeInscriptionDate3 || setInscriptionDate3 != null && setInscriptionDate3 !== '')
		vals['setInscriptionDate3'] = setInscriptionDate3;
	var addInscriptionDate3 = $formulaireValeurs.find('.addInscriptionDate3').val();
	if(addInscriptionDate3 != null && addInscriptionDate3 !== '')
		vals['addInscriptionDate3'] = addInscriptionDate3;
	var removeInscriptionDate3 = $formulaireValeurs.find('.removeInscriptionDate3').val();
	if(removeInscriptionDate3 != null && removeInscriptionDate3 !== '')
		vals['removeInscriptionDate3'] = removeInscriptionDate3;

	var valeurInscriptionDate4 = $formulaireValeurs.find('.valeurInscriptionDate4').val();
	if(valeurInscriptionDate4 != null && valeurInscriptionDate4 !== '')
	var removeInscriptionDate4 = $formulaireFiltres.find('.removeInscriptionDate4').val() === 'true';
	var setInscriptionDate4 = removeInscriptionDate4 ? null : $formulaireValeurs.find('.setInscriptionDate4').val();
	if(removeInscriptionDate4 || setInscriptionDate4 != null && setInscriptionDate4 !== '')
		vals['setInscriptionDate4'] = setInscriptionDate4;
	var addInscriptionDate4 = $formulaireValeurs.find('.addInscriptionDate4').val();
	if(addInscriptionDate4 != null && addInscriptionDate4 !== '')
		vals['addInscriptionDate4'] = addInscriptionDate4;
	var removeInscriptionDate4 = $formulaireValeurs.find('.removeInscriptionDate4').val();
	if(removeInscriptionDate4 != null && removeInscriptionDate4 !== '')
		vals['removeInscriptionDate4'] = removeInscriptionDate4;

	var valeurInscriptionDate5 = $formulaireValeurs.find('.valeurInscriptionDate5').val();
	if(valeurInscriptionDate5 != null && valeurInscriptionDate5 !== '')
	var removeInscriptionDate5 = $formulaireFiltres.find('.removeInscriptionDate5').val() === 'true';
	var setInscriptionDate5 = removeInscriptionDate5 ? null : $formulaireValeurs.find('.setInscriptionDate5').val();
	if(removeInscriptionDate5 || setInscriptionDate5 != null && setInscriptionDate5 !== '')
		vals['setInscriptionDate5'] = setInscriptionDate5;
	var addInscriptionDate5 = $formulaireValeurs.find('.addInscriptionDate5').val();
	if(addInscriptionDate5 != null && addInscriptionDate5 !== '')
		vals['addInscriptionDate5'] = addInscriptionDate5;
	var removeInscriptionDate5 = $formulaireValeurs.find('.removeInscriptionDate5').val();
	if(removeInscriptionDate5 != null && removeInscriptionDate5 !== '')
		vals['removeInscriptionDate5'] = removeInscriptionDate5;

	var valeurInscriptionDate6 = $formulaireValeurs.find('.valeurInscriptionDate6').val();
	if(valeurInscriptionDate6 != null && valeurInscriptionDate6 !== '')
	var removeInscriptionDate6 = $formulaireFiltres.find('.removeInscriptionDate6').val() === 'true';
	var setInscriptionDate6 = removeInscriptionDate6 ? null : $formulaireValeurs.find('.setInscriptionDate6').val();
	if(removeInscriptionDate6 || setInscriptionDate6 != null && setInscriptionDate6 !== '')
		vals['setInscriptionDate6'] = setInscriptionDate6;
	var addInscriptionDate6 = $formulaireValeurs.find('.addInscriptionDate6').val();
	if(addInscriptionDate6 != null && addInscriptionDate6 !== '')
		vals['addInscriptionDate6'] = addInscriptionDate6;
	var removeInscriptionDate6 = $formulaireValeurs.find('.removeInscriptionDate6').val();
	if(removeInscriptionDate6 != null && removeInscriptionDate6 !== '')
		vals['removeInscriptionDate6'] = removeInscriptionDate6;

	var valeurInscriptionDate7 = $formulaireValeurs.find('.valeurInscriptionDate7').val();
	if(valeurInscriptionDate7 != null && valeurInscriptionDate7 !== '')
	var removeInscriptionDate7 = $formulaireFiltres.find('.removeInscriptionDate7').val() === 'true';
	var setInscriptionDate7 = removeInscriptionDate7 ? null : $formulaireValeurs.find('.setInscriptionDate7').val();
	if(removeInscriptionDate7 || setInscriptionDate7 != null && setInscriptionDate7 !== '')
		vals['setInscriptionDate7'] = setInscriptionDate7;
	var addInscriptionDate7 = $formulaireValeurs.find('.addInscriptionDate7').val();
	if(addInscriptionDate7 != null && addInscriptionDate7 !== '')
		vals['addInscriptionDate7'] = addInscriptionDate7;
	var removeInscriptionDate7 = $formulaireValeurs.find('.removeInscriptionDate7').val();
	if(removeInscriptionDate7 != null && removeInscriptionDate7 !== '')
		vals['removeInscriptionDate7'] = removeInscriptionDate7;

	var valeurInscriptionDate8 = $formulaireValeurs.find('.valeurInscriptionDate8').val();
	if(valeurInscriptionDate8 != null && valeurInscriptionDate8 !== '')
	var removeInscriptionDate8 = $formulaireFiltres.find('.removeInscriptionDate8').val() === 'true';
	var setInscriptionDate8 = removeInscriptionDate8 ? null : $formulaireValeurs.find('.setInscriptionDate8').val();
	if(removeInscriptionDate8 || setInscriptionDate8 != null && setInscriptionDate8 !== '')
		vals['setInscriptionDate8'] = setInscriptionDate8;
	var addInscriptionDate8 = $formulaireValeurs.find('.addInscriptionDate8').val();
	if(addInscriptionDate8 != null && addInscriptionDate8 !== '')
		vals['addInscriptionDate8'] = addInscriptionDate8;
	var removeInscriptionDate8 = $formulaireValeurs.find('.removeInscriptionDate8').val();
	if(removeInscriptionDate8 != null && removeInscriptionDate8 !== '')
		vals['removeInscriptionDate8'] = removeInscriptionDate8;

	var valeurInscriptionDate9 = $formulaireValeurs.find('.valeurInscriptionDate9').val();
	if(valeurInscriptionDate9 != null && valeurInscriptionDate9 !== '')
	var removeInscriptionDate9 = $formulaireFiltres.find('.removeInscriptionDate9').val() === 'true';
	var setInscriptionDate9 = removeInscriptionDate9 ? null : $formulaireValeurs.find('.setInscriptionDate9').val();
	if(removeInscriptionDate9 || setInscriptionDate9 != null && setInscriptionDate9 !== '')
		vals['setInscriptionDate9'] = setInscriptionDate9;
	var addInscriptionDate9 = $formulaireValeurs.find('.addInscriptionDate9').val();
	if(addInscriptionDate9 != null && addInscriptionDate9 !== '')
		vals['addInscriptionDate9'] = addInscriptionDate9;
	var removeInscriptionDate9 = $formulaireValeurs.find('.removeInscriptionDate9').val();
	if(removeInscriptionDate9 != null && removeInscriptionDate9 !== '')
		vals['removeInscriptionDate9'] = removeInscriptionDate9;

	var valeurInscriptionDate10 = $formulaireValeurs.find('.valeurInscriptionDate10').val();
	if(valeurInscriptionDate10 != null && valeurInscriptionDate10 !== '')
	var removeInscriptionDate10 = $formulaireFiltres.find('.removeInscriptionDate10').val() === 'true';
	var setInscriptionDate10 = removeInscriptionDate10 ? null : $formulaireValeurs.find('.setInscriptionDate10').val();
	if(removeInscriptionDate10 || setInscriptionDate10 != null && setInscriptionDate10 !== '')
		vals['setInscriptionDate10'] = setInscriptionDate10;
	var addInscriptionDate10 = $formulaireValeurs.find('.addInscriptionDate10').val();
	if(addInscriptionDate10 != null && addInscriptionDate10 !== '')
		vals['addInscriptionDate10'] = addInscriptionDate10;
	var removeInscriptionDate10 = $formulaireValeurs.find('.removeInscriptionDate10').val();
	if(removeInscriptionDate10 != null && removeInscriptionDate10 !== '')
		vals['removeInscriptionDate10'] = removeInscriptionDate10;

	patchpaiementsInscriptionMedicaleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchpaiementsInscriptionMedicaleFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePk = $formulaireFiltres.find('.valeurPk').val();
		if(filtrePk != null && filtrePk !== '')
			filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

		var filtreCree = $formulaireFiltres.find('.valeurCree').val();
		if(filtreCree != null && filtreCree !== '')
			filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

		var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
		if(filtreModifie != null && filtreModifie !== '')
			filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

		var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
		if(filtreObjetId != null && filtreObjetId !== '')
			filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

		var $filtreArchiveCheckbox = $formulaireFiltres.find('input.valeurArchive[type = "checkbox"]');
		var $filtreArchiveSelect = $formulaireFiltres.find('select.valeurArchive');
		var filtreArchive = $filtreArchiveSelect.length ? $filtreArchiveSelect.val() : $filtreArchiveCheckbox.prop('checked');
		var filtreArchiveSelectVal = $formulaireFiltres.find('select.filtreArchive').val();
		var filtreArchive = null;
		if(filtreArchiveSelectVal !== '')
			filtreArchive = filtreArchiveSelectVal == 'true';
		if(filtreArchive != null && filtreArchive === true)
			filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

		var $filtreSupprimeCheckbox = $formulaireFiltres.find('input.valeurSupprime[type = "checkbox"]');
		var $filtreSupprimeSelect = $formulaireFiltres.find('select.valeurSupprime');
		var filtreSupprime = $filtreSupprimeSelect.length ? $filtreSupprimeSelect.val() : $filtreSupprimeCheckbox.prop('checked');
		var filtreSupprimeSelectVal = $formulaireFiltres.find('select.filtreSupprime').val();
		var filtreSupprime = null;
		if(filtreSupprimeSelectVal !== '')
			filtreSupprime = filtreSupprimeSelectVal == 'true';
		if(filtreSupprime != null && filtreSupprime === true)
			filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var filtreFamilleAddresse = $formulaireFiltres.find('.valeurFamilleAddresse').val();
		if(filtreFamilleAddresse != null && filtreFamilleAddresse !== '')
			filtres.push({ name: 'fq', value: 'familleAddresse:' + filtreFamilleAddresse });

		var filtreInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.valeurInscriptionConsiderationsSpeciales').val();
		if(filtreInscriptionConsiderationsSpeciales != null && filtreInscriptionConsiderationsSpeciales !== '')
			filtres.push({ name: 'fq', value: 'inscriptionConsiderationsSpeciales:' + filtreInscriptionConsiderationsSpeciales });

		var filtrePatientConditionsMedicales = $formulaireFiltres.find('.valeurPatientConditionsMedicales').val();
		if(filtrePatientConditionsMedicales != null && filtrePatientConditionsMedicales !== '')
			filtres.push({ name: 'fq', value: 'patientConditionsMedicales:' + filtrePatientConditionsMedicales });

		var filtrePatientCliniquesPrecedemmentFrequentees = $formulaireFiltres.find('.valeurPatientCliniquesPrecedemmentFrequentees').val();
		if(filtrePatientCliniquesPrecedemmentFrequentees != null && filtrePatientCliniquesPrecedemmentFrequentees !== '')
			filtres.push({ name: 'fq', value: 'patientCliniquesPrecedemmentFrequentees:' + filtrePatientCliniquesPrecedemmentFrequentees });

		var filtreFamilleCommentVousConnaissezClinique = $formulaireFiltres.find('.valeurFamilleCommentVousConnaissezClinique').val();
		if(filtreFamilleCommentVousConnaissezClinique != null && filtreFamilleCommentVousConnaissezClinique !== '')
			filtres.push({ name: 'fq', value: 'familleCommentVousConnaissezClinique:' + filtreFamilleCommentVousConnaissezClinique });

		var filtrePatientDescription = $formulaireFiltres.find('.valeurPatientDescription').val();
		if(filtrePatientDescription != null && filtrePatientDescription !== '')
			filtres.push({ name: 'fq', value: 'patientDescription:' + filtrePatientDescription });

		var filtrePatientObjectifs = $formulaireFiltres.find('.valeurPatientObjectifs').val();
		if(filtrePatientObjectifs != null && filtrePatientObjectifs !== '')
			filtres.push({ name: 'fq', value: 'patientObjectifs:' + filtrePatientObjectifs });

		var filtrePatientCle = $formulaireFiltres.find('.valeurPatientCle').val();
		if(filtrePatientCle != null && filtrePatientCle !== '')
			filtres.push({ name: 'fq', value: 'patientCle:' + filtrePatientCle });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreInheritPk = $formulaireFiltres.find('.valeurInheritPk').val();
		if(filtreInheritPk != null && filtreInheritPk !== '')
			filtres.push({ name: 'fq', value: 'inheritPk:' + filtreInheritPk });

		var filtreId = $formulaireFiltres.find('.valeurId').val();
		if(filtreId != null && filtreId !== '')
			filtres.push({ name: 'fq', value: 'id:' + filtreId });

		var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
		if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
			filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

		var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
		if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
			filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

		var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
		if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
			filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

		var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
		if(filtreSessionId != null && filtreSessionId !== '')
			filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

		var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
		if(filtreSauvegardes != null && filtreSauvegardes !== '')
			filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

		var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
		if(filtreObjetTitre != null && filtreObjetTitre !== '')
			filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

		var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
		if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
			filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtreInscriptionCle = $formulaireFiltres.find('.valeurInscriptionCle').val();
		if(filtreInscriptionCle != null && filtreInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCle:' + filtreInscriptionCle });

		var filtreCliniqueCle = $formulaireFiltres.find('.valeurCliniqueCle').val();
		if(filtreCliniqueCle != null && filtreCliniqueCle !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCle:' + filtreCliniqueCle });

		var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
		if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

		var filtreMedicaleTri = $formulaireFiltres.find('.valeurMedicaleTri').val();
		if(filtreMedicaleTri != null && filtreMedicaleTri !== '')
			filtres.push({ name: 'fq', value: 'medicaleTri:' + filtreMedicaleTri });

		var filtreCliniqueTri = $formulaireFiltres.find('.valeurCliniqueTri').val();
		if(filtreCliniqueTri != null && filtreCliniqueTri !== '')
			filtres.push({ name: 'fq', value: 'cliniqueTri:' + filtreCliniqueTri });

		var filtrePatientPrenom = $formulaireFiltres.find('.valeurPatientPrenom').val();
		if(filtrePatientPrenom != null && filtrePatientPrenom !== '')
			filtres.push({ name: 'fq', value: 'patientPrenom:' + filtrePatientPrenom });

		var filtrePatientPrenomPrefere = $formulaireFiltres.find('.valeurPatientPrenomPrefere').val();
		if(filtrePatientPrenomPrefere != null && filtrePatientPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientPrenomPrefere:' + filtrePatientPrenomPrefere });

		var filtrePatientFamilleNom = $formulaireFiltres.find('.valeurPatientFamilleNom').val();
		if(filtrePatientFamilleNom != null && filtrePatientFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'patientFamilleNom:' + filtrePatientFamilleNom });

		var filtrePatientNomComplet = $formulaireFiltres.find('.valeurPatientNomComplet').val();
		if(filtrePatientNomComplet != null && filtrePatientNomComplet !== '')
			filtres.push({ name: 'fq', value: 'patientNomComplet:' + filtrePatientNomComplet });

		var filtrePatientNomCompletPrefere = $formulaireFiltres.find('.valeurPatientNomCompletPrefere').val();
		if(filtrePatientNomCompletPrefere != null && filtrePatientNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientNomCompletPrefere:' + filtrePatientNomCompletPrefere });

		var filtrePatientDateNaissance = $formulaireFiltres.find('.valeurPatientDateNaissance').val();
		if(filtrePatientDateNaissance != null && filtrePatientDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissance:' + filtrePatientDateNaissance });

		var filtrePatientDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceDAnnee').val();
		if(filtrePatientDateNaissanceDAnnee != null && filtrePatientDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceDAnnee:' + filtrePatientDateNaissanceDAnnee });

		var filtrePatientDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceMoisDAnnee').val();
		if(filtrePatientDateNaissanceMoisDAnnee != null && filtrePatientDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceMoisDAnnee:' + filtrePatientDateNaissanceMoisDAnnee });

		var filtrePatientDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPatientDateNaissanceJourDeSemaine').val();
		if(filtrePatientDateNaissanceJourDeSemaine != null && filtrePatientDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceJourDeSemaine:' + filtrePatientDateNaissanceJourDeSemaine });

		var filtrePatientMoisNaissance = $formulaireFiltres.find('.valeurPatientMoisNaissance').val();
		if(filtrePatientMoisNaissance != null && filtrePatientMoisNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientMoisNaissance:' + filtrePatientMoisNaissance });

		var filtrePatientJourNaissance = $formulaireFiltres.find('.valeurPatientJourNaissance').val();
		if(filtrePatientJourNaissance != null && filtrePatientJourNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientJourNaissance:' + filtrePatientJourNaissance });

		var filtreCliniqueNom = $formulaireFiltres.find('.valeurCliniqueNom').val();
		if(filtreCliniqueNom != null && filtreCliniqueNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNom:' + filtreCliniqueNom });

		var filtreCliniqueNomComplet = $formulaireFiltres.find('.valeurCliniqueNomComplet').val();
		if(filtreCliniqueNomComplet != null && filtreCliniqueNomComplet !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNomComplet:' + filtreCliniqueNomComplet });

		var filtreCliniqueEmplacement = $formulaireFiltres.find('.valeurCliniqueEmplacement').val();
		if(filtreCliniqueEmplacement != null && filtreCliniqueEmplacement !== '')
			filtres.push({ name: 'fq', value: 'cliniqueEmplacement:' + filtreCliniqueEmplacement });

		var filtreCliniqueAddresse = $formulaireFiltres.find('.valeurCliniqueAddresse').val();
		if(filtreCliniqueAddresse != null && filtreCliniqueAddresse !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAddresse:' + filtreCliniqueAddresse });

		var filtreCliniqueNumeroTelephone = $formulaireFiltres.find('.valeurCliniqueNumeroTelephone').val();
		if(filtreCliniqueNumeroTelephone != null && filtreCliniqueNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'cliniqueNumeroTelephone:' + filtreCliniqueNumeroTelephone });

		var filtreCliniqueAdministrateurNom = $formulaireFiltres.find('.valeurCliniqueAdministrateurNom').val();
		if(filtreCliniqueAdministrateurNom != null && filtreCliniqueAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'cliniqueAdministrateurNom:' + filtreCliniqueAdministrateurNom });

		var filtreCustomerProfileId = $formulaireFiltres.find('.valeurCustomerProfileId').val();
		if(filtreCustomerProfileId != null && filtreCustomerProfileId !== '')
			filtres.push({ name: 'fq', value: 'customerProfileId:' + filtreCustomerProfileId });

		var filtreCreeDAnnee = $formulaireFiltres.find('.valeurCreeDAnnee').val();
		if(filtreCreeDAnnee != null && filtreCreeDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeDAnnee:' + filtreCreeDAnnee });

		var filtreCreeJourDeSemaine = $formulaireFiltres.find('.valeurCreeJourDeSemaine').val();
		if(filtreCreeJourDeSemaine != null && filtreCreeJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'creeJourDeSemaine:' + filtreCreeJourDeSemaine });

		var filtreCreeMoisDAnnee = $formulaireFiltres.find('.valeurCreeMoisDAnnee').val();
		if(filtreCreeMoisDAnnee != null && filtreCreeMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeMoisDAnnee:' + filtreCreeMoisDAnnee });

		var filtreCreeHeureDuJour = $formulaireFiltres.find('.valeurCreeHeureDuJour').val();
		if(filtreCreeHeureDuJour != null && filtreCreeHeureDuJour !== '')
			filtres.push({ name: 'fq', value: 'creeHeureDuJour:' + filtreCreeHeureDuJour });

		var filtreInscriptionDate1 = $formulaireFiltres.find('.valeurInscriptionDate1').val();
		if(filtreInscriptionDate1 != null && filtreInscriptionDate1 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate1:' + filtreInscriptionDate1 });

		var filtreInscriptionDate2 = $formulaireFiltres.find('.valeurInscriptionDate2').val();
		if(filtreInscriptionDate2 != null && filtreInscriptionDate2 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate2:' + filtreInscriptionDate2 });

		var filtreInscriptionDate3 = $formulaireFiltres.find('.valeurInscriptionDate3').val();
		if(filtreInscriptionDate3 != null && filtreInscriptionDate3 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate3:' + filtreInscriptionDate3 });

		var filtreInscriptionDate4 = $formulaireFiltres.find('.valeurInscriptionDate4').val();
		if(filtreInscriptionDate4 != null && filtreInscriptionDate4 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate4:' + filtreInscriptionDate4 });

		var filtreInscriptionDate5 = $formulaireFiltres.find('.valeurInscriptionDate5').val();
		if(filtreInscriptionDate5 != null && filtreInscriptionDate5 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate5:' + filtreInscriptionDate5 });

		var filtreInscriptionDate6 = $formulaireFiltres.find('.valeurInscriptionDate6').val();
		if(filtreInscriptionDate6 != null && filtreInscriptionDate6 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate6:' + filtreInscriptionDate6 });

		var filtreInscriptionDate7 = $formulaireFiltres.find('.valeurInscriptionDate7').val();
		if(filtreInscriptionDate7 != null && filtreInscriptionDate7 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate7:' + filtreInscriptionDate7 });

		var filtreInscriptionDate8 = $formulaireFiltres.find('.valeurInscriptionDate8').val();
		if(filtreInscriptionDate8 != null && filtreInscriptionDate8 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate8:' + filtreInscriptionDate8 });

		var filtreInscriptionDate9 = $formulaireFiltres.find('.valeurInscriptionDate9').val();
		if(filtreInscriptionDate9 != null && filtreInscriptionDate9 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate9:' + filtreInscriptionDate9 });

		var filtreInscriptionDate10 = $formulaireFiltres.find('.valeurInscriptionDate10').val();
		if(filtreInscriptionDate10 != null && filtreInscriptionDate10 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate10:' + filtreInscriptionDate10 });

		var filtreInscriptionNomComplet = $formulaireFiltres.find('.valeurInscriptionNomComplet').val();
		if(filtreInscriptionNomComplet != null && filtreInscriptionNomComplet !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomComplet:' + filtreInscriptionNomComplet });
	}
	return filtres;
}

function patchpaiementsInscriptionMedicaleVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchpaiementsInscriptionMedicaleVals(filtres, vals, success, error);
}

function patchpaiementsInscriptionMedicaleVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

async function websocketInscriptionMedicale(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketInscriptionMedicale', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-blue-gray ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fas fa-notes-medical w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier inscriptions');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-blue-gray ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			$('.box-' + id).remove();
			if(numPATCH < numFound)
				$('.top-box').append($box);
			if(success)
					success(json);
		});

		window.eventBus.registerHandler('websocketPatientMedicale', function (error, message) {
			$('#Page_patientCle').trigger('oninput');
			$('#Page_patientCle_ajouter').text('ajouter un patient');
			$('#Page_patientCle_ajouter').removeClass('w3-disabled');
			$('#Page_patientCle_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketUtilisateurSite', function (error, message) {
			$('#Page_utilisateurCles').trigger('oninput');
			$('#Page_utilisateurCles_ajouter').text('ajouter un utilisateur du site');
			$('#Page_utilisateurCles_ajouter').removeClass('w3-disabled');
			$('#Page_utilisateurCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPatientMedicale', function (error, message) {
			$('#Page_patientCle').trigger('oninput');
			$('#Page_patientCle_ajouter').text('ajouter un patient');
			$('#Page_patientCle_ajouter').removeClass('w3-disabled');
			$('#Page_patientCle_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketUtilisateurSite', function (error, message) {
			$('#Page_utilisateurCles').trigger('oninput');
			$('#Page_utilisateurCles_ajouter').text('ajouter un utilisateur du site');
			$('#Page_utilisateurCles_ajouter').removeClass('w3-disabled');
			$('#Page_utilisateurCles_ajouter').attr('disabled', false);
		});
	}
}
async function websocketInscriptionMedicaleInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherInscriptionMedicaleVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputInscriptionMedicale' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputInscriptionMedicale' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'Modifie'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputInscriptionMedicale' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputInscriptionMedicale' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'Supprime'));
			}
			var val = o['inscriptionApprouve'];
			if(vars.includes('inscriptionApprouve')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionApprouve').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionApprouve').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionApprouve'));
			}
			var val = o['inscriptionImmunisations'];
			if(vars.includes('inscriptionImmunisations')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionImmunisations').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionImmunisations').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionImmunisations'));
			}
			var val = o['familleAddresse'];
			if(vars.includes('familleAddresse')) {
				$('.inputInscriptionMedicale' + pk + 'FamilleAddresse').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'FamilleAddresse').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'FamilleAddresse'));
			}
			var val = o['inscriptionConsiderationsSpeciales'];
			if(vars.includes('inscriptionConsiderationsSpeciales')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionConsiderationsSpeciales').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionConsiderationsSpeciales').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionConsiderationsSpeciales'));
			}
			var val = o['patientConditionsMedicales'];
			if(vars.includes('patientConditionsMedicales')) {
				$('.inputInscriptionMedicale' + pk + 'PatientConditionsMedicales').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'PatientConditionsMedicales').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'PatientConditionsMedicales'));
			}
			var val = o['patientCliniquesPrecedemmentFrequentees'];
			if(vars.includes('patientCliniquesPrecedemmentFrequentees')) {
				$('.inputInscriptionMedicale' + pk + 'PatientCliniquesPrecedemmentFrequentees').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'PatientCliniquesPrecedemmentFrequentees').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'PatientCliniquesPrecedemmentFrequentees'));
			}
			var val = o['familleCommentVousConnaissezClinique'];
			if(vars.includes('familleCommentVousConnaissezClinique')) {
				$('.inputInscriptionMedicale' + pk + 'FamilleCommentVousConnaissezClinique').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'FamilleCommentVousConnaissezClinique').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'FamilleCommentVousConnaissezClinique'));
			}
			var val = o['patientDescription'];
			if(vars.includes('patientDescription')) {
				$('.inputInscriptionMedicale' + pk + 'PatientDescription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'PatientDescription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'PatientDescription'));
			}
			var val = o['patientObjectifs'];
			if(vars.includes('patientObjectifs')) {
				$('.inputInscriptionMedicale' + pk + 'PatientObjectifs').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'PatientObjectifs').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'PatientObjectifs'));
			}
			var val = o['patientCle'];
			if(vars.includes('patientCle')) {
				$('.inputInscriptionMedicale' + pk + 'PatientCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'PatientCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'PatientCle'));
			}
			var val = o['utilisateurCles'];
			if(vars.includes('utilisateurCles')) {
				$('.inputInscriptionMedicale' + pk + 'UtilisateurCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'UtilisateurCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'UtilisateurCles'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputInscriptionMedicale' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InheritPk'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputInscriptionMedicale' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputInscriptionMedicale' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputInscriptionMedicale' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'UtilisateurCle'));
			}
			var val = o['patientNomComplet'];
			if(vars.includes('patientNomComplet')) {
				$('.inputInscriptionMedicale' + pk + 'PatientNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'PatientNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'PatientNomComplet'));
			}
			var val = o['patientNomCompletPrefere'];
			if(vars.includes('patientNomCompletPrefere')) {
				$('.inputInscriptionMedicale' + pk + 'PatientNomCompletPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'PatientNomCompletPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'PatientNomCompletPrefere'));
			}
			var val = o['patientDateNaissance'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('patientDateNaissance')) {
				$('.inputInscriptionMedicale' + pk + 'PatientDateNaissance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'PatientDateNaissance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'PatientDateNaissance'));
			}
			var val = o['cliniqueAddresse'];
			if(vars.includes('cliniqueAddresse')) {
				$('.inputInscriptionMedicale' + pk + 'CliniqueAddresse').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'CliniqueAddresse').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'CliniqueAddresse'));
			}
			var val = o['customerProfileId'];
			if(vars.includes('customerProfileId')) {
				$('.inputInscriptionMedicale' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'CustomerProfileId'));
			}
			var val = o['inscriptionSignature1'];
			if(vars.includes('inscriptionSignature1')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionSignature1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionSignature1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionSignature1'));
			}
			var val = o['inscriptionSignature2'];
			if(vars.includes('inscriptionSignature2')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionSignature2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionSignature2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionSignature2'));
			}
			var val = o['inscriptionSignature3'];
			if(vars.includes('inscriptionSignature3')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionSignature3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionSignature3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionSignature3'));
			}
			var val = o['inscriptionSignature4'];
			if(vars.includes('inscriptionSignature4')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionSignature4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionSignature4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionSignature4'));
			}
			var val = o['inscriptionSignature5'];
			if(vars.includes('inscriptionSignature5')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionSignature5').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionSignature5').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionSignature5'));
			}
			var val = o['inscriptionSignature6'];
			if(vars.includes('inscriptionSignature6')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionSignature6').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionSignature6').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionSignature6'));
			}
			var val = o['inscriptionSignature7'];
			if(vars.includes('inscriptionSignature7')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionSignature7').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionSignature7').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionSignature7'));
			}
			var val = o['inscriptionSignature8'];
			if(vars.includes('inscriptionSignature8')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionSignature8').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionSignature8').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionSignature8'));
			}
			var val = o['inscriptionSignature9'];
			if(vars.includes('inscriptionSignature9')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionSignature9').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionSignature9').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionSignature9'));
			}
			var val = o['inscriptionSignature10'];
			if(vars.includes('inscriptionSignature10')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionSignature10').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionSignature10').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionSignature10'));
			}
			var val = o['inscriptionDate1'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate1')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionDate1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionDate1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionDate1'));
			}
			var val = o['inscriptionDate2'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate2')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionDate2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionDate2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionDate2'));
			}
			var val = o['inscriptionDate3'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate3')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionDate3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionDate3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionDate3'));
			}
			var val = o['inscriptionDate4'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate4')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionDate4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionDate4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionDate4'));
			}
			var val = o['inscriptionDate5'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate5')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionDate5').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionDate5').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionDate5'));
			}
			var val = o['inscriptionDate6'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate6')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionDate6').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionDate6').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionDate6'));
			}
			var val = o['inscriptionDate7'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate7')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionDate7').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionDate7').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionDate7'));
			}
			var val = o['inscriptionDate8'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate8')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionDate8').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionDate8').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionDate8'));
			}
			var val = o['inscriptionDate9'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate9')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionDate9').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionDate9').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionDate9'));
			}
			var val = o['inscriptionDate10'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate10')) {
				$('.inputInscriptionMedicale' + pk + 'InscriptionDate10').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionMedicale' + pk + 'InscriptionDate10').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionMedicale' + pk + 'InscriptionDate10'));
			}
		});
	}
}
