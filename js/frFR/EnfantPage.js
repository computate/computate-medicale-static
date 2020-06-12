
// POST //

async function postPatientMedicale($formulaireValeurs, success, error) {
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

	var valeurPatientPrenom = $formulaireValeurs.find('.valeurPatientPrenom').val();
	if(valeurPatientPrenom != null && valeurPatientPrenom !== '')
		vals['patientPrenom'] = valeurPatientPrenom;

	var valeurFamilleNom = $formulaireValeurs.find('.valeurFamilleNom').val();
	if(valeurFamilleNom != null && valeurFamilleNom !== '')
		vals['familleNom'] = valeurFamilleNom;

	var valeurPatientPrenomPrefere = $formulaireValeurs.find('.valeurPatientPrenomPrefere').val();
	if(valeurPatientPrenomPrefere != null && valeurPatientPrenomPrefere !== '')
		vals['patientPrenomPrefere'] = valeurPatientPrenomPrefere;

	var valeurPatientDateNaissance = $formulaireValeurs.find('.valeurPatientDateNaissance').val();
	if(valeurPatientDateNaissance != null && valeurPatientDateNaissance !== '')
		vals['patientDateNaissance'] = valeurPatientDateNaissance;

	var valeurInscriptionCles = [];
	$formulaireValeurs.find('input.valeurInscriptionCles:checked').each(function(index) {
		valeurInscriptionCles.push($(this).val());
	});
	if(valeurInscriptionCles.length > 0)
		vals['inscriptionCles'] = valeurInscriptionCles;

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

	$.ajax({
		url: '/api/patient'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postPatientMedicaleVals(vals, success, error) {
	$.ajax({
		url: '/api/patient'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportPatientMedicale($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportPatientMedicaleVals(JSON.parse(json), success, error);
}

function putimportPatientMedicaleVals(json, success, error) {
	$.ajax({
		url: '/api/patient/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionPatientMedicale($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionPatientMedicaleVals(JSON.parse(json), success, error);
}

function putfusionPatientMedicaleVals(json, success, error) {
	$.ajax({
		url: '/api/patient/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopiePatientMedicale($formulaireValeurs, pk, success, error) {
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

	var valeurPatientPrenom = $formulaireValeurs.find('.valeurPatientPrenom').val();
	if(valeurPatientPrenom != null && valeurPatientPrenom !== '')
		vals['patientPrenom'] = valeurPatientPrenom;

	var valeurFamilleNom = $formulaireValeurs.find('.valeurFamilleNom').val();
	if(valeurFamilleNom != null && valeurFamilleNom !== '')
		vals['familleNom'] = valeurFamilleNom;

	var valeurPatientPrenomPrefere = $formulaireValeurs.find('.valeurPatientPrenomPrefere').val();
	if(valeurPatientPrenomPrefere != null && valeurPatientPrenomPrefere !== '')
		vals['patientPrenomPrefere'] = valeurPatientPrenomPrefere;

	var valeurPatientDateNaissance = $formulaireValeurs.find('.valeurPatientDateNaissance').val();
	if(valeurPatientDateNaissance != null && valeurPatientDateNaissance !== '')
		vals['patientDateNaissance'] = valeurPatientDateNaissance;

	var valeurInscriptionCles = $formulaireValeurs.find('input.valeurInscriptionCles:checked').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['inscriptionCles'] = [valeurInscriptionCles];

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

	putcopiePatientMedicaleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopiePatientMedicaleVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/patient/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchPatientMedicale($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchPatientMedicaleFiltres($formulaireFiltres);

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

	var valeurPatientPrenom = $formulaireValeurs.find('.valeurPatientPrenom').val();
	if(valeurPatientPrenom != null && valeurPatientPrenom !== '')
	var removePatientPrenom = $formulaireFiltres.find('.removePatientPrenom').val() === 'true';
	var setPatientPrenom = removePatientPrenom ? null : $formulaireValeurs.find('.setPatientPrenom').val();
	if(removePatientPrenom || setPatientPrenom != null && setPatientPrenom !== '')
		vals['setPatientPrenom'] = setPatientPrenom;
	var addPatientPrenom = $formulaireValeurs.find('.addPatientPrenom').val();
	if(addPatientPrenom != null && addPatientPrenom !== '')
		vals['addPatientPrenom'] = addPatientPrenom;
	var removePatientPrenom = $formulaireValeurs.find('.removePatientPrenom').val();
	if(removePatientPrenom != null && removePatientPrenom !== '')
		vals['removePatientPrenom'] = removePatientPrenom;

	var valeurFamilleNom = $formulaireValeurs.find('.valeurFamilleNom').val();
	if(valeurFamilleNom != null && valeurFamilleNom !== '')
	var removeFamilleNom = $formulaireFiltres.find('.removeFamilleNom').val() === 'true';
	var setFamilleNom = removeFamilleNom ? null : $formulaireValeurs.find('.setFamilleNom').val();
	if(removeFamilleNom || setFamilleNom != null && setFamilleNom !== '')
		vals['setFamilleNom'] = setFamilleNom;
	var addFamilleNom = $formulaireValeurs.find('.addFamilleNom').val();
	if(addFamilleNom != null && addFamilleNom !== '')
		vals['addFamilleNom'] = addFamilleNom;
	var removeFamilleNom = $formulaireValeurs.find('.removeFamilleNom').val();
	if(removeFamilleNom != null && removeFamilleNom !== '')
		vals['removeFamilleNom'] = removeFamilleNom;

	var valeurPatientPrenomPrefere = $formulaireValeurs.find('.valeurPatientPrenomPrefere').val();
	if(valeurPatientPrenomPrefere != null && valeurPatientPrenomPrefere !== '')
	var removePatientPrenomPrefere = $formulaireFiltres.find('.removePatientPrenomPrefere').val() === 'true';
	var setPatientPrenomPrefere = removePatientPrenomPrefere ? null : $formulaireValeurs.find('.setPatientPrenomPrefere').val();
	if(removePatientPrenomPrefere || setPatientPrenomPrefere != null && setPatientPrenomPrefere !== '')
		vals['setPatientPrenomPrefere'] = setPatientPrenomPrefere;
	var addPatientPrenomPrefere = $formulaireValeurs.find('.addPatientPrenomPrefere').val();
	if(addPatientPrenomPrefere != null && addPatientPrenomPrefere !== '')
		vals['addPatientPrenomPrefere'] = addPatientPrenomPrefere;
	var removePatientPrenomPrefere = $formulaireValeurs.find('.removePatientPrenomPrefere').val();
	if(removePatientPrenomPrefere != null && removePatientPrenomPrefere !== '')
		vals['removePatientPrenomPrefere'] = removePatientPrenomPrefere;

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

	var valeurInscriptionCles = $formulaireValeurs.find('input.valeurInscriptionCles:checked').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['addInscriptionCles'] = valeurInscriptionCles;

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

	patchPatientMedicaleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchPatientMedicaleFiltres($formulaireFiltres) {
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

		var filtrePatientPrenom = $formulaireFiltres.find('.valeurPatientPrenom').val();
		if(filtrePatientPrenom != null && filtrePatientPrenom !== '')
			filtres.push({ name: 'fq', value: 'patientPrenom:' + filtrePatientPrenom });

		var filtreFamilleNom = $formulaireFiltres.find('.valeurFamilleNom').val();
		if(filtreFamilleNom != null && filtreFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'familleNom:' + filtreFamilleNom });

		var filtrePatientPrenomPrefere = $formulaireFiltres.find('.valeurPatientPrenomPrefere').val();
		if(filtrePatientPrenomPrefere != null && filtrePatientPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientPrenomPrefere:' + filtrePatientPrenomPrefere });

		var filtrePatientDateNaissance = $formulaireFiltres.find('.valeurPatientDateNaissance').val();
		if(filtrePatientDateNaissance != null && filtrePatientDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissance:' + filtrePatientDateNaissance });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

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

		var filtrePatientCle = $formulaireFiltres.find('.valeurPatientCle').val();
		if(filtrePatientCle != null && filtrePatientCle !== '')
			filtres.push({ name: 'fq', value: 'patientCle:' + filtrePatientCle });

		var filtrePatientTri = $formulaireFiltres.find('.valeurPatientTri').val();
		if(filtrePatientTri != null && filtrePatientTri !== '')
			filtres.push({ name: 'fq', value: 'patientTri:' + filtrePatientTri });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreCliniqueCles = $formulaireFiltres.find('.valeurCliniqueCles').val();
		if(filtreCliniqueCles != null && filtreCliniqueCles !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCles:' + filtreCliniqueCles });

		var filtrePatientNomComplet = $formulaireFiltres.find('.valeurPatientNomComplet').val();
		if(filtrePatientNomComplet != null && filtrePatientNomComplet !== '')
			filtres.push({ name: 'fq', value: 'patientNomComplet:' + filtrePatientNomComplet });

		var filtrePatientNomCompletPrefere = $formulaireFiltres.find('.valeurPatientNomCompletPrefere').val();
		if(filtrePatientNomCompletPrefere != null && filtrePatientNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientNomCompletPrefere:' + filtrePatientNomCompletPrefere });

		var filtrePatientNomFormel = $formulaireFiltres.find('.valeurPatientNomFormel').val();
		if(filtrePatientNomFormel != null && filtrePatientNomFormel !== '')
			filtres.push({ name: 'fq', value: 'patientNomFormel:' + filtrePatientNomFormel });

		var filtrePatientDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceDAnnee').val();
		if(filtrePatientDateNaissanceDAnnee != null && filtrePatientDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceDAnnee:' + filtrePatientDateNaissanceDAnnee });

		var filtrePatientDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceMoisDAnnee').val();
		if(filtrePatientDateNaissanceMoisDAnnee != null && filtrePatientDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceMoisDAnnee:' + filtrePatientDateNaissanceMoisDAnnee });

		var filtrePatientDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPatientDateNaissanceJourDeSemaine').val();
		if(filtrePatientDateNaissanceJourDeSemaine != null && filtrePatientDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceJourDeSemaine:' + filtrePatientDateNaissanceJourDeSemaine });
	}
	return filtres;
}

function patchPatientMedicaleVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchPatientMedicaleVals(filtres, vals, success, error);
}

function patchPatientMedicaleVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/patient?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getPatientMedicale(pk) {
	$.ajax({
		url: '/api/patient/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function recherchePatientMedicale($formulaireFiltres, success, error) {
	var filtres = recherchePatientMedicaleFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	recherchePatientMedicaleVals(filtres, success, error);
}

function recherchePatientMedicaleFiltres($formulaireFiltres) {
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

		var filtrePatientPrenom = $formulaireFiltres.find('.valeurPatientPrenom').val();
		if(filtrePatientPrenom != null && filtrePatientPrenom !== '')
			filtres.push({ name: 'fq', value: 'patientPrenom:' + filtrePatientPrenom });

		var filtreFamilleNom = $formulaireFiltres.find('.valeurFamilleNom').val();
		if(filtreFamilleNom != null && filtreFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'familleNom:' + filtreFamilleNom });

		var filtrePatientPrenomPrefere = $formulaireFiltres.find('.valeurPatientPrenomPrefere').val();
		if(filtrePatientPrenomPrefere != null && filtrePatientPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientPrenomPrefere:' + filtrePatientPrenomPrefere });

		var filtrePatientDateNaissance = $formulaireFiltres.find('.valeurPatientDateNaissance').val();
		if(filtrePatientDateNaissance != null && filtrePatientDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissance:' + filtrePatientDateNaissance });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

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

		var filtrePatientCle = $formulaireFiltres.find('.valeurPatientCle').val();
		if(filtrePatientCle != null && filtrePatientCle !== '')
			filtres.push({ name: 'fq', value: 'patientCle:' + filtrePatientCle });

		var filtrePatientTri = $formulaireFiltres.find('.valeurPatientTri').val();
		if(filtrePatientTri != null && filtrePatientTri !== '')
			filtres.push({ name: 'fq', value: 'patientTri:' + filtrePatientTri });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreCliniqueCles = $formulaireFiltres.find('.valeurCliniqueCles').val();
		if(filtreCliniqueCles != null && filtreCliniqueCles !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCles:' + filtreCliniqueCles });

		var filtrePatientNomComplet = $formulaireFiltres.find('.valeurPatientNomComplet').val();
		if(filtrePatientNomComplet != null && filtrePatientNomComplet !== '')
			filtres.push({ name: 'fq', value: 'patientNomComplet:' + filtrePatientNomComplet });

		var filtrePatientNomCompletPrefere = $formulaireFiltres.find('.valeurPatientNomCompletPrefere').val();
		if(filtrePatientNomCompletPrefere != null && filtrePatientNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientNomCompletPrefere:' + filtrePatientNomCompletPrefere });

		var filtrePatientNomFormel = $formulaireFiltres.find('.valeurPatientNomFormel').val();
		if(filtrePatientNomFormel != null && filtrePatientNomFormel !== '')
			filtres.push({ name: 'fq', value: 'patientNomFormel:' + filtrePatientNomFormel });

		var filtrePatientDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceDAnnee').val();
		if(filtrePatientDateNaissanceDAnnee != null && filtrePatientDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceDAnnee:' + filtrePatientDateNaissanceDAnnee });

		var filtrePatientDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceMoisDAnnee').val();
		if(filtrePatientDateNaissanceMoisDAnnee != null && filtrePatientDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceMoisDAnnee:' + filtrePatientDateNaissanceMoisDAnnee });

		var filtrePatientDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPatientDateNaissanceJourDeSemaine').val();
		if(filtrePatientDateNaissanceJourDeSemaine != null && filtrePatientDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceJourDeSemaine:' + filtrePatientDateNaissanceJourDeSemaine });
	}
	return filtres;
}

function recherchePatientMedicaleVals(filtres, success, error) {
	$.ajax({
		url: '/api/patient?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggerePatientMedicaleObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-hospital-user ');
			var $span = $('<span>').attr('class', '').text(o['patientNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherPatientMedicaleVals($formulaireFiltres, success, error);
}

function suggerePatientMedicaleInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['patientCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_patientCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_patientCle_" + o['pk'] + "'); patchPatientMedicaleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#PatientMedicaleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionMedicaleVals(filtres, success, error);
}

// RechercheAdmin //

async function rechercheadminPatientMedicale($formulaireFiltres, success, error) {
	var filtres = rechercheadminPatientMedicaleFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheadminPatientMedicaleVals(filtres, success, error);
}

function rechercheadminPatientMedicaleFiltres($formulaireFiltres) {
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

		var filtrePatientPrenom = $formulaireFiltres.find('.valeurPatientPrenom').val();
		if(filtrePatientPrenom != null && filtrePatientPrenom !== '')
			filtres.push({ name: 'fq', value: 'patientPrenom:' + filtrePatientPrenom });

		var filtreFamilleNom = $formulaireFiltres.find('.valeurFamilleNom').val();
		if(filtreFamilleNom != null && filtreFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'familleNom:' + filtreFamilleNom });

		var filtrePatientPrenomPrefere = $formulaireFiltres.find('.valeurPatientPrenomPrefere').val();
		if(filtrePatientPrenomPrefere != null && filtrePatientPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientPrenomPrefere:' + filtrePatientPrenomPrefere });

		var filtrePatientDateNaissance = $formulaireFiltres.find('.valeurPatientDateNaissance').val();
		if(filtrePatientDateNaissance != null && filtrePatientDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissance:' + filtrePatientDateNaissance });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

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

		var filtrePatientCle = $formulaireFiltres.find('.valeurPatientCle').val();
		if(filtrePatientCle != null && filtrePatientCle !== '')
			filtres.push({ name: 'fq', value: 'patientCle:' + filtrePatientCle });

		var filtrePatientTri = $formulaireFiltres.find('.valeurPatientTri').val();
		if(filtrePatientTri != null && filtrePatientTri !== '')
			filtres.push({ name: 'fq', value: 'patientTri:' + filtrePatientTri });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreCliniqueCles = $formulaireFiltres.find('.valeurCliniqueCles').val();
		if(filtreCliniqueCles != null && filtreCliniqueCles !== '')
			filtres.push({ name: 'fq', value: 'cliniqueCles:' + filtreCliniqueCles });

		var filtrePatientNomComplet = $formulaireFiltres.find('.valeurPatientNomComplet').val();
		if(filtrePatientNomComplet != null && filtrePatientNomComplet !== '')
			filtres.push({ name: 'fq', value: 'patientNomComplet:' + filtrePatientNomComplet });

		var filtrePatientNomCompletPrefere = $formulaireFiltres.find('.valeurPatientNomCompletPrefere').val();
		if(filtrePatientNomCompletPrefere != null && filtrePatientNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'patientNomCompletPrefere:' + filtrePatientNomCompletPrefere });

		var filtrePatientNomFormel = $formulaireFiltres.find('.valeurPatientNomFormel').val();
		if(filtrePatientNomFormel != null && filtrePatientNomFormel !== '')
			filtres.push({ name: 'fq', value: 'patientNomFormel:' + filtrePatientNomFormel });

		var filtrePatientDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceDAnnee').val();
		if(filtrePatientDateNaissanceDAnnee != null && filtrePatientDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceDAnnee:' + filtrePatientDateNaissanceDAnnee });

		var filtrePatientDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPatientDateNaissanceMoisDAnnee').val();
		if(filtrePatientDateNaissanceMoisDAnnee != null && filtrePatientDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceMoisDAnnee:' + filtrePatientDateNaissanceMoisDAnnee });

		var filtrePatientDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPatientDateNaissanceJourDeSemaine').val();
		if(filtrePatientDateNaissanceJourDeSemaine != null && filtrePatientDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'patientDateNaissanceJourDeSemaine:' + filtrePatientDateNaissanceJourDeSemaine });
	}
	return filtres;
}

function rechercheadminPatientMedicaleVals(filtres, success, error) {
	$.ajax({
		url: '/api/admin/patient?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggerePatientMedicaleObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-hospital-user ');
			var $span = $('<span>').attr('class', '').text(o['patientNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherPatientMedicaleVals($formulaireFiltres, success, error);
}

function suggerePatientMedicaleInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['patientCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_patientCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_patientCle_" + o['pk'] + "'); patchPatientMedicaleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#PatientMedicaleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionMedicaleVals(filtres, success, error);
}

async function websocketPatientMedicale(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketPatientMedicale', function (error, message) {
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
			var $header = $('<div>').attr('class', 'w3-container fa-orange ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-hospital-user w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier patients');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-orange ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketInscriptionMedicale', function (error, message) {
			$('#Page_inscriptionCles').trigger('oninput');
			$('#Page_inscriptionCles_ajouter').text('ajouter une inscription');
			$('#Page_inscriptionCles_ajouter').removeClass('w3-disabled');
			$('#Page_inscriptionCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketInscriptionMedicale', function (error, message) {
			$('#Page_inscriptionCles').trigger('oninput');
			$('#Page_inscriptionCles_ajouter').text('ajouter une inscription');
			$('#Page_inscriptionCles_ajouter').removeClass('w3-disabled');
			$('#Page_inscriptionCles_ajouter').attr('disabled', false);
		});
	}
}
async function websocketPatientMedicaleInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherPatientMedicaleVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputPatientMedicale' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputPatientMedicale' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'Modifie'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputPatientMedicale' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputPatientMedicale' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'Supprime'));
			}
			var val = o['patientPrenom'];
			if(vars.includes('patientPrenom')) {
				$('.inputPatientMedicale' + pk + 'PatientPrenom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'PatientPrenom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'PatientPrenom'));
			}
			var val = o['familleNom'];
			if(vars.includes('familleNom')) {
				$('.inputPatientMedicale' + pk + 'FamilleNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'FamilleNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'FamilleNom'));
			}
			var val = o['patientPrenomPrefere'];
			if(vars.includes('patientPrenomPrefere')) {
				$('.inputPatientMedicale' + pk + 'PatientPrenomPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'PatientPrenomPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'PatientPrenomPrefere'));
			}
			var val = o['patientDateNaissance'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('patientDateNaissance')) {
				$('.inputPatientMedicale' + pk + 'PatientDateNaissance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'PatientDateNaissance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'PatientDateNaissance'));
			}
			var val = o['inscriptionCles'];
			if(vars.includes('inscriptionCles')) {
				$('.inputPatientMedicale' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'InscriptionCles'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputPatientMedicale' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'InheritPk'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputPatientMedicale' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputPatientMedicale' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputPatientMedicale' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPatientMedicale' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPatientMedicale' + pk + 'UtilisateurCle'));
			}
		});
	}
}
